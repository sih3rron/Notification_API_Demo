import React from 'react';

export default function Hero() {
  return (
    <header
      className="w-full h-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80')",
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
