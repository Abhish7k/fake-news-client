/* eslint-disable no-unused-vars */

import { useState } from "react";
import linkIcon from "../assets/link.svg";
import loader from "../assets/loader.svg";
// src/assets/loader.svg

const Demo = () => {
  const [isFake, setIsFake] = useState("Real");
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading("true");

    setTimeout(() => {
      setResult(true);
      setLoading("false");
    }, 3000);

    console.log("submit handled");
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Paste the article link"
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
      </div>

      {/* Display Result */}
      <div className="my-10 max-w-full flex flex-col justify-center items-center">
        {loading === "true" && (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        )}

        {result && (
          <div>
            <h2 className="mt-4 font-satoshi font-bold text-gray-600 text-xl">
              Result: <span className="blue_gradient">{isFake}</span>
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
