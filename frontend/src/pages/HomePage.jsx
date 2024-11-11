import React from 'react';
import '../style/homepage.css';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';


function HomePage() {
  return (
    <section className="h-screen">
     <Header showIcon={true} />
      
      <div className="h-[50vh] flex flex-col items-center justify-center space-y-6 mt-[6%] cursor-default">
        <p className="text-[80px] font-bebas text-center text-primary font-josefin italic">Ask and Learn</p>
        <SearchBar />
      </div>
      


    </section>
  );
}

export default HomePage;
