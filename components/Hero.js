import React from 'react';

export default function Hero() {
  return (
    <header
      className="w-full h-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg')",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl text-white font-bold drop-shadow-lg">
          Hello
        </h1>
        <p class="mt-5 text-center text-lg text-white opacity-70">World</p>
      </div>
    </header>
  );
}
