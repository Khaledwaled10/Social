import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="bg-white w-full text-center p-3 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="text-blue-600 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Social
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/Khaledwaled10"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                    
                      href="https://www.linkedin.com/in/khaled-waled-7219b5294/"
                      className="hover:underline"
                    >
                    Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://en.wikipedia.org/wiki/Privacy_policy" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
                <span className="text-blue-600">
                    © 2023 Flowbite™. All Rights Reserved
                </span>
            </div>
            <div className="flex justify-center items-center mt-4">
            <div>
                <Link to='https://www.facebook.com/khaled.ramdan.56863'>
              <i className=" fa-brands fa-facebook text-xl text-blue-600 me-3  hover:text-blue-300"></i>
                </Link>
            </div>
            <div>
                <Link to='https://x.com/'>
              <i className=" fa-brands fa-twitter text-xl text-blue-600 me-3  hover:text-blue-300"></i>
                
                </Link>
            </div>
            <div>
                <Link to='https://github.com/Khaledwaled10'>
              <i className=" fa-brands fa-github text-xl text-blue-600 me-3 hover:text-blue-300"></i>
                </Link>
            </div>
            <div>
                <Link to='https://www.linkedin.com/in/khaled-waled-7219b5294/' >
              <i className=" fa-brands fa-linkedin text-xl text-blue-600 me-3 hover:text-blue-300"></i>
                
                </Link>
            </div>
            <div>
                <Link to='https://discord.com/'>
              <i className=" fa-brands fa-discord text-xl text-blue-600 me-3  hover:text-blue-300"></i>
                </Link>
            </div>

            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
