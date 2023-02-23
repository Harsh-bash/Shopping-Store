function Contact() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-5xl lg:text-2xl font-medium title-font mb-4 text-pink-600">Contact Us</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-white sm:text-3xl lg:text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto sm:text-2xl">
            <div class="flex flex-wrap -m-2">

              <div class="p-2 w-full sm:text-3xl lg:text-xl">
                <div class="relative">
                  <input type="text" id="name" name="name" class="w-full text-black bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 px-5 outline-none lg:py-1 lg:px-3 sm:py-5 leading-8 transition-colors duration-200 ease-in-out" placeholder="Name" />
                </div>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <input type="text" id="name" name="name" class="w-full text-black bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 px-5 outline-none lg:py-1 lg:px-3 sm:py-5 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email" />
                </div>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32  outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Your Message"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="btn btn-secondary text-2xl w-40 text-pink-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>

                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <span class="text-pink-600">example@email.com</span>
                <p class="leading-normal my-5">49 Smith St.

                </p>
                <span class="inline-flex">
                  <a class="text-gray-500" href="facebook">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-10 sm:h-10 lg:w-6 lg:h-6" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-6 text-gray-500" href="twitter">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-10 sm:h-10 lg:w-6 lg:h-6" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-6 text-gray-500" href="instagram">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-10 sm:h-10 lg:w-6 lg:h-6" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a class="ml-6 text-gray-500" href="signal">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-10 sm:h-10 lg:w-6 lg:h-6" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact