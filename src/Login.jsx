import React from "react";

export default function Login() {
  return (
    <div className="h-full w-[20rem] m-auto flex flex-col justify-center items-center">
      <form action="#" method="post" className="w-[80%] flex flex-col">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#83c6c4] peer"
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#83c6c4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            UserName
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            id="password"
            name="pass1"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#83c6c4] peer"
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#83c6c4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <input
          type="submit"
          value="Login"
          className="w-[50%] cursor-pointer bg-[#6cc1b6] text-white font-semibold text-xl py-1 px-4 m-4 rounded-3xl hover:bg-opacity-[90%] transition duration-100 self-center"
        />
      </form>
    </div>
  );
}
