"use client"
import React from 'react'

function Buttons({ action, data, placeholder, classname }: { action: any, data: string, placeholder: string, classname: string }) {

    const getData = async (data: string) => {
        const res = await fetch(`/api/summarize/`)
    }

    const submitData = async (data: string) => {
        const res = await fetch('/api/summarize/', {
            method: 'POST', // Specify the request method as POST
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify({ text: data }) // Send the data as JSON in the request body
        });

        if (!res.ok) {
            alert('Something went wrong')
        }

        if (res.ok) {
            alert('Data sent successfully')
            const data = await res.json()
            console.log('data.data', data.data)
        }
    }

    return (
        <button onClick={() => submitData(data)} className={`${classname} `}>{placeholder}</button>
    )
}

export default Buttons