import React from 'react';
import '../style/homepage.css';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import MiddlePage from '../components/middlePage';


function HomePage() {
  return (
    <section className="homepage">
     <Header showIcon={true} />
      
      <div className="h-[50vh] flex flex-col items-center justify-center space-y-6 ">
        <p className="text-[80px] font-bebas text-center text-primary font-josefin italic">Explore. Ask. Learn.</p>
        <SearchBar />
      </div>
      <MiddlePage />


    </section>
  );
}

export default HomePage;
