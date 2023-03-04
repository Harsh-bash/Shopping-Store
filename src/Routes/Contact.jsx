function Contact() {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 p-5 sm:p-10 lg:p-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl lg:text-2xl font-medium title-font mb-4 text-primary">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-secondary sm:text-3xl lg:text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto sm:text-2xl">
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-full sm:text-3xl lg:text-xl">
                <div className="relative">
                  <input type="text" id="name" name="name" className="w-full text-black bg-opacity-50 rounded border border-gray-700 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 px-5 outline-none lg:py-0 lg:px-3 sm:py-5 leading-8 transition-colors duration-200 ease-in-out" placeholder="Name" />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <input type="text" id="name" name="name" className="w-full text-black border-gray-700 bg-opacity-50 rounded border  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 px-5 outline-none lg:py-0 lg:px-3 sm:py-5 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email" />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <textarea id="message" name="message" className="w-full border-gray-700 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32  outline-none text-gray-700 py-0 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Your Message"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="btn bg-primary text-2xl w-full text-secondary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact