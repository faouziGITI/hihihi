export const AboutForm = () => {
  return (
    <form
      action=""
      className="w-full h-full  p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition"
    >
      <label
        className=" text-white text-lg font-medium capitalize "
        htmlFor="fullname"
      >
        Full Name: <span>*</span>
      </label>
      <input
        className="w-full h-fit outline-0 peer px-2.5 py-1 rounded-md bg-white text-gray-900 font-normal border border-black  mb-1.5"
        id="fullname"
        type="text"
        placeholder="Hdaydi Ostora"
        required
      />
      <label
        className=" text-white text-lg font-medium capitalize "
        htmlFor="email"
      >
        Email: <span>*</span>
      </label>
      <input
        className="w-full h-fit outline-0 peer px-2.5 py-1 rounded-md bg-white text-gray-900 font-normal border border-black  mb-1.5"
        id="email"
        type="text"
        placeholder="shesthebest@beloved.com"
        required
      />
      <label
        className=" text-white text-lg font-medium capitalize "
        htmlFor="message"
      >
        Message: <span>*</span>
      </label>
      <textarea
        placeholder="type your message here..."
        className="w-full h-fit outline-0 peer px-2.5 py-1 rounded-md bg-white text-gray-900 font-normal border border-black "
        id="message"
        cols={3}
        rows={5}
      ></textarea>
      <button className="w-full h-10 rounded-md font-medium text-black cursor-pointer bg-white my-1.5">
        SUBMIT
      </button>
    </form>
  );
};
