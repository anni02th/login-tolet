import React from "react";

export default function Login() {
  return (
    <div className="h-full w-[20rem] m-auto flex flex-col justify-center items-center">
      <form action="#" method="post" className="w-[80%] flex flex-col">
        <div className="my-4">
          <label htmlFor="name" className="block font-semibold">
            UserName:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-Bpurple drop-shadow"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="pass1"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-Bpurple drop-shadow"
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="w-[50%] bg-purple-500 text-white font-semibold text-xl py-1 px-4 m-4 rounded-3xl hover:bg-opacity-[90%] transition duration-100 self-center"
        />
      </form>
    </div>
  );
}
