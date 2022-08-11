import React, { useState } from "react";
import { Alert } from "components";
import { login } from "api";
export const Home = () => {
  const [input, setInput] = useState({
    password: "",
    email: "",
  });

  const handleChangeInput = (event) => {
    setInput({
      ...input,
      [`${event.target.name}`]: event.target.value,
    });
  };
  const [toggleAlert, setToggleAlert] = useState(false);
  const handleLogin = async () => {
    let result = await login(input);
    if (result) {
      setToggleAlert(true);
    }
  };
  return (
    <>
      <div className="bg-white rounded-xl p-8 text-left ">
        <h1 className="text-lg font-semibold mb-8">Authentification</h1>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            name="email"
            onChange={handleChangeInput}
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            name="password"
            onChange={handleChangeInput}
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button
            data-modal-toggle="defaultModal"
            type="button"
            onClick={handleLogin}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Valider
          </button>
        </div>
      </div>
      <Alert show={toggleAlert} message="login succesffull" color="green" />
    </>
  );
};
