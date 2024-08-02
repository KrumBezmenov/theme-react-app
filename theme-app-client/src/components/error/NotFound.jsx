function NotFound() {
  return (
    <>
      <div class="selection:bg-rose-500 selection:text-white">
        <div class="min-h-screen bg-purple-200 flex justify-center items-center">
          <div class="p-8 flex-1">
            <div class="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
              <div class="relative h-48 bg-red-400 rounded-bl-4xl">
                <svg
                  class="absolute bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
                <div class="  text-center text-base-content p-4">
                  {" "}
                  404 Page Not Found
                </div>

                <div class="  text-center text-base-content p-4">
                  <a
                    href="/home"
                    class="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Go back home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
