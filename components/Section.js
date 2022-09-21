import React from 'react';

export default function Section() {
  return (
    <section
      class="bg-white bg-cover text-white opacity-80"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg')",
      }}
    >
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl text-yellow-200 font-extrabold leading-none md:text-5xl xl:text-6xl">
            Payments tool for software companies
          </h1>
          <p class="max-w-2xl mb-6 font-light text-blue-200 lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800"
          >
            Speak to sales
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-700 border border-gray-300 bg-white rounded-lg hover:bg-gray-500"
          >
            Get Started
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}
