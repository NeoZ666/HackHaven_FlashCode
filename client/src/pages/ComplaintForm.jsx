import React from "react";

function ComplaintForm() {
  return (
    <section class="bg-gray-100">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg">
              Your feedback matters! Help us improve our community by sharing
              any concerns or issues you've encountered in the area. Together,
              we can work towards making our neighborhood a better place for
              everyone. Thank you for taking the time to voice your concerns
            </p>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" class="space-y-4">
              <div>
                <label
                  for="Docs"
                  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    id="Title"
                    placeholder="Tile"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Title
                  </span>
                </label>
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

                  <div>
                    <label
                      htmlFor="Docs"
                      className="block text-xs font-medium text-gray-700"
                    >
                      {" "}
                      Douments / Images related to the complaint{" "}
                    </label>

                    <input
                      type="file"
                      id="docs"
                      placeholder="john@rhcp.com"
                      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

              <div>
                <label
                  htmlFor="OrderNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Description{" "}
                </label>

                <textarea
                  id="OrderNotes"
                  className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                  rows="4"
                  placeholder="Write the complaint here"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-amethyst px-5 py-3 font-medium text-white sm:w-auto"
                >
                  File a complaint
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplaintForm;
