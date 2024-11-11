import React, { useEffect, useState } from 'react';
import '../style/index.css'

function MiddlePage() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.category-card');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="middle-page h-screen flex flex-col items-center justify-center space-y-8 bg-gradient-to-b from-white to-[#8fd8ff]">
      <h2 className="text-5xl font-bold text-primary text-center cursor-default">
        Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 py-8 cursor-default">
        <div
          className={`category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center ${
            inView ? 'left' : ''
          }`}
        >
          <h3 className="text-lg font-semibold text-[#3b414a]">Elementary Math</h3>
        </div>

        <div
          className={`category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center ${
            inView ? 'right' : ''
          }`}
        >
          <h3 className="text-lg font-semibold text-[#3b414a]">Algebra</h3>
        </div>

        <div
          className={`category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center ${
            inView ? 'left' : ''
          }`}
        >
          <h3 className="text-lg font-semibold text-[#3b414a]">Geometry</h3>
        </div>

        <div
          className={`category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center ${
            inView ? 'right' : ''
          }`}
        >
          <h3 className="text-lg font-semibold text-[#3b414a]">Trigonometry</h3>
        </div>

        <div
          className={`category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center ${
            inView ? 'left' : ''
          }`}
        >
          <h3 className="text-lg font-semibold text-[#3b414a]">Precalculus</h3>
        </div>

        <div
          className={`category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center ${
            inView ? 'right' : ''
          }`}
        >
          <h3 className="text-lg font-semibold text-[#3b414a]">Calculus</h3>
        </div>

        <div
          className={`category-card p-6 bg-white shadow-xl border border-grey rounded-lg flex flex-col items-center text-center ${
            inView ? 'left' : ''
          }`}
        >
          <h3 className="text-lg font-semibold text-[#3b414a]">Statistics</h3>
        </div>
      </div>
    </section>
  );
}

export default MiddlePage;
