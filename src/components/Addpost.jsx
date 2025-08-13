import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import Loading from './Loading'
import { Createposts } from '../api/posts/createpost.api'
import toast from 'react-hot-toast'

export default function Addpost() {
  const [img, setimg] = useState()
  const [body, setbody] = useState('')
  const [imgsrc, setimgsrc] = useState()
  const queryClient = useQueryClient()

  const { isError, isSuccess, isPending, error, mutate, data } = useMutation({
    mutationFn: Createposts,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] })
  })

  function handlechangefile(e) {
    const file = e.target.files[0]
    setimg(file)
    setimgsrc(URL.createObjectURL(file))
  }

  function handleAddpost(e) {
    e.preventDefault()
    const formdata = new FormData()
    if (body) formdata.append('body', body)
    if (img) formdata.append('image', img)
    mutate(formdata)
    clr()
  }

  function clr() {
    setbody('')
    setimg('')
    setimgsrc('')
  }

  return (
    <>
    
      {isPending && <Loading />}
    
      <form
        onSubmit={handleAddpost}
        className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center font-bold text-2xl m-5 mt-10 text-gray-800">
          New Post
        </div>

        <div className="editor flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg rounded-lg bg-white dark:bg-gray-900">
          {imgsrc && (
            <img
              src={imgsrc}
              className="w-full max-h-96 object-contain rounded-md"
              alt=""
            />
          )}
          <input
            onChange={handlechangefile}
            className="hidden"
            id="file"
            type="file"
          />

          <textarea
            value={body}
            onChange={(e) => setbody(e.target.value)}
            className="bg-gray-100 p-3 h-40 sm:h-60 border border-gray-300 rounded-md outline-none resize-none"
            placeholder="Describe your post here..."
          />

          <div className="icons flex text-gray-500 mt-3 gap-2 flex-wrap">
            <svg
              className="cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <label htmlFor="file">
              <svg
                className="cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </label>

            <div className="ml-auto text-gray-400 text-xs font-semibold">
              {body.length}/300
            </div>
          </div>

          <div className="buttons flex justify-end gap-2 mt-3">
            <button
              type="button"
              onClick={clr}
              className="border border-gray-300 px-4 py-1 font-semibold text-gray-500 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border border-blue-500 px-4 py-1 font-semibold text-white bg-blue-500 rounded-md"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
