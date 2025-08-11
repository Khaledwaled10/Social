import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './../context/Logincontext'
import { mode } from '../context/Themecontext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { islogin, setlogin, isuser, setuser } = useContext(auth)
  const { theme, toggletheme } = useContext(mode)
  const navigate = useNavigate()

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function logout() {
    setlogin(null)
    localStorage.removeItem('token')
    setuser(null)
    navigate('/')
  }

  return (
    <nav className="shadow bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <h2 className="text-blue-600 font-bold text-xl">Social</h2>

        {/* زرار الموبايل */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 17 14"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* القائمة */}
        <div
          className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0 bg-gray-50 md:bg-transparent rounded-lg md:rounded-none dark:bg-gray-800 md:dark:bg-transparent">
            {islogin ? (
              <>
                <li>
                  <Link
                    to="/home"
                    className="block py-2 px-3 text-blue-700 dark:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <p
                    onClick={logout}
                    className="block py-2 px-3 text-blue-700 dark:text-blue-500 cursor-pointer"
                  >
                    Logout
                  </p>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2"
                    to={`/profile/${isuser?._id}`}
                  >
                    <img
                      src={isuser?.photo}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="text-blue-600">{isuser?.name}</p>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-blue-700 dark:text-blue-500"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 px-3 text-blue-700 dark:text-blue-500"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
            <li>
              <label className="inline-flex items-center cursor-pointer mt-4">
                <input
                  onChange={toggletheme}
                  checked={theme === 'dark'}
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5" />
                </div>
                <span className="ml-3 text-sm text-gray-900 dark:text-gray-300">
                  <i className="fa-solid fa-moon text-blue-600"></i>
                  <i className="fa-solid fa-sun text-blue-600"></i>
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
