import React from 'react';

function MiddlePage() {
  return (
    <section className="middle-page h-[25vh] flex flex-col items-center justify-center space-y-8">
      <h2 className="text-5xl font-bold text-black text-center ">
        Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 py-8">
      
        <div className="category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform">

          <h3 className="text-lg font-semibold text-[#3b414a]">Elementary Math</h3>
        </div>

        <div className="category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
          
          <h3 className="text-lg font-semibold text-[#3b414a]">Algebra</h3>
        </div>

        <div className="category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
          
          <h3 className="text-lg font-semibold text-[#3b414a]">Geometry</h3>
        </div>

        <div className="category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
         
          <h3 className="text-lg font-semibold text-[#3b414a]">Trigonometry</h3>
        </div>

        <div className="category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
         
          <h3 className="text-lg font-semibold text-[#3b414a]">Precalculus</h3>
        </div>

        <div className="category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
         
          <h3 className="text-lg font-semibold text-[#3b414a]">Calculus</h3>
        </div>
        <div className="category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
        
          <h3 className="text-lg font-semibold text-[#3b414a]">Statistics</h3>
        </div>
      </div>
    </section>
  );
}

export default MiddlePage;
