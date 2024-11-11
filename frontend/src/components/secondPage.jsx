import React from 'react';
import '../style/index.css'

function SecondPage() {
  return (
    <section className="middle-page h-screen flex flex-col items-center justify-center space-y-12 bg-gradient-to-b from-[#8fd8ff] to-[#ffffff] p-8">
      {/* Title */}
      <h2 className="text-6xl font-bold text-primary text-center cursor-default">
        Easy Rules
      </h2>

      {/* Rule List */}
      <div className="text-center space-y-4">
        <p className="font-josefin text-xl text-gray-700 ">
          1. <b>ALWAYS</b> respect other users.
        </p>
        <p className="text-xl text-gray-700 s  font-josefin">
          2. Do not spam questions, if you don't get an answer just wait.
        </p>
        <p className="text-xl text-gray-700   font-josefin">
          3. Never use bad words.
        </p>
        <p className="text-xl text-gray-700  font-josefin">
          4. You must be registered to publish and answer.
        </p>
      </div>
    </section>
  );
}

export default SecondPage;
