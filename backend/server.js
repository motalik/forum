const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json()); // per il parsing del JSON

// Connessione al database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // modifica se usi un altro utente
  password: '',  // la tua password di MySQL
  database: 'mydb'  // nome del tuo database
});

db.connect((err) => {
  if (err) {
    console.error('Errore di connessione al database:', err);
    return;
  }
  console.log('Connesso al database MySQL');
});

// API di registrazione
app.post('/api/auth/signup', async (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Tutti i campi sono obbligatori' });
  }

  // Verifica se l'email esiste già
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Errore nel database' });
    if (results.length > 0) {
      return res.status(400).json({ message: 'L\'email è già in uso' });
    }

    // Hash della password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserisci il nuovo utente
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Errore durante la registrazione' });
      }
      return res.status(200).json({ message: 'Registrazione avvenuta con successo!' });
    });
  });
});

// API di login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Tutti i campi sono obbligatori' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Errore nel database' });
    if (results.length === 0) {
      return res.status(400).json({ message: 'Credenziali non valide' });
    }

    // Confronta la password hashata
    const isMatch = await bcrypt.compare(password, results[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenziali non valide' });
    }

    // Genera un token JWT
    const token = jwt.sign({ id: results[0].id }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login riuscito', token });
  });
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
