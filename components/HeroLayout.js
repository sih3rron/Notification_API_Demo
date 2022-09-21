import React from 'react';

export default function HeroLayout() {
  return (
    <header className="w-full h-96 bg-[url('https://images.unsplash.com/photo-1503435980610-a51f3ddfee50')] bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl text-white font-bold drop-shadow-lg">
          Hello
        </h1>
        <p class="mt-5 text-center text-lg text-white opacity-70">World</p>
      </div>
    </header>
  );
}
