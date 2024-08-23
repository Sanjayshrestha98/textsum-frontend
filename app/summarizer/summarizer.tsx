"use client";
import React, { useState } from 'react'
import axios from 'axios'

function HomePage() {

  const [rawText, setRawText] = useState('')
  const [summtext, setSummText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [textCopied, setTextCopied] = useState(false)

  const copyToClipboard = () => {
    setTextCopied(true)
    navigator.clipboard.writeText(summtext)

    setTimeout(() => {
      setTextCopied(false)
    }, 1000)
  }

  const submitData = async (data: string) => {
    try {
      // Start loading state
      setIsLoading(true);

      const res = await axios.post('http://127.0.0.1:8000/summarize', {
        request: data
      }) 

      setSummText(res.data.summary);
      
      setIsLoading(false);

    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while processing your request.');
    } finally {
      // Stop loading state
      setIsLoading(false);
    }
  };


  const submitFileData = async (data: string) => {
    setIsLoading(true)

    const formData = new FormData();
    formData.append("file", data);

    fetch("/api/summarize", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        setSummText(data?.summData.summary)
        setIsLoading(false)
      })
      .catch(error => {
        console.log('error', error)
        setIsLoading(false)
      });

  }

  return (
    <>
      <div className=' w-full flex-1 flex flex-col gap-10 p-4 font-bold  max-w-6xl mx-auto'>
        <div className='w-full h-full bg-gray-100 rounded shadow p-4'>
          <textarea
          rows={10}
            disabled={isLoading}
            onChange={(e) => setRawText(e.target.value)} placeholder='Your Text Here..' className=' w-full h-full border rounded focus:outline-none p-3 bg-gray-50' />
          <input type='file' onChange={(e: any) => {
            submitFileData(e.target.files[0])
          }} />
          <div className='flex justify-end'>
            <button
              disabled={isLoading}
              onClick={() => submitData(rawText)} className={`w-fit bg-blue-600 text-gray-100 rounded h-fit text-sm border px-4 py-3 mt-3`}>{isLoading ? 'Summarizing...' : 'Summarize'}</button>
            {/* <Buttons action={"action"} data={"data"} placeholder={"Summarize"} classname={"w-fit text-sm border px-4 py-3"} /> */}
          </div>
        </div>

        <div className='text-gray-300 text-center'> ---------- </div>

        {
          isLoading &&

          <div role="status" className="animate-pulse border p-4">
            <span className="sr-only">Loading...</span>

            <div className="h-2.5 bg-gray-300 rounded-full mb-2 max-w-[190px]"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-10 max-w-[190px]"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-2.5 bg-gray-300 rounded-full mb-2.5 mx-auto"></div>
            <div className="h-3 bg-gray-300 rounded-full mt-10 max-w-[190px]"></div>
          </div>
        }

        {
          (!isLoading && summtext) &&
          <div className='w-full h-full'>

            <h2 className='text-blue-900 font-extrabold'>Your Summarized Text</h2>

            <p className='w-full my-5 h-full focus:outline-none p-5 bg-gray-100'>{summtext}</p>
            <button className='border rounded-sm p-2 bg-gray-100' title='Copy' onClick={() => { copyToClipboard() }}>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clipboard">
                <rect width="8" height="4" x="8" y="2"
                  rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>

            </button>
            {
              textCopied && <p className='text-sm'>Copied</p>
            }
          </div>
        }
      </div>



    </>
  )
}

export default HomePage