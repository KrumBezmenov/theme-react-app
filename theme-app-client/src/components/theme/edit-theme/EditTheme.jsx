import { Link } from "react-router-dom";

function EditTheme() {
  return (
    <>
      <div class="selection:bg-rose-500 selection:text-white">
        <div class="min-h-screen bg-purple-200 flex justify-center items-center">
          <div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg bg-red-500">
            <div class="mt-10 text-center font-bold">Editting time</div>
            <div class="mt-3 text-center text-4xl font-bold">Edit Journey</div>
            <div class="p-8">
              <div class="flex gap-4">
                <input
                  type="Name"
                  name="name"
                  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Country"
                />
                <input
                  type="email"
                  name="email"
                  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="City"
                />
              </div>

              <div class="my-6 flex gap-4">
                <div class="flex gap-4">
                  <input
                    type="Name"
                    name="name"
                    class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Image URL"
                  />
                  <input
                    type="email"
                    name="email"
                    class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Type Of Vacation"
                  />
                </div>
              </div>
              <div class="">
                <textarea
                  name="textarea"
                  id="text"
                  cols="30"
                  rows="10"
                  class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold "
                  placeholder="Describe your experience"
                ></textarea>
              </div>
              <div class="text-center">
                <Link
                  to="/:themesId/details"
                  class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default EditTheme;
