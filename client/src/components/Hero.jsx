import React from 'react'

function Hero() {
  return (
    <section class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-40 lg:flex  lg:items-center">
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Understand User Flow.
        <strong class="font-extrabold text-violet sm:block"> Increase Conversion. </strong>
      </h1>

      <p class="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-amethyst px-12 py-3 text-sm font-medium text-white shadow hover:bg-violet focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-amethyst shadow hover:text-violet focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero