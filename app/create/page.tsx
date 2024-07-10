import React from 'react'

const page = () => {
  return (
    <div className='my-10'>
        <h1 className='text-4xl font-bold mt-0 text-blueGray-700 mb-8'>Add New Interpretation</h1>
        <form action="">
            <input type="text" name='term' placeholder='Term' className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            <textarea name='interpretation' placeholder='Interpretation' rows={8} className='resize-x rounded-md appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-6'></textarea>
            <button className="px-6 py-2 bg-green-800 text-white rounded-md w-full mt-5">
                Add Interpretation
            </button>
        </form>
        
    </div>
  )
}

export default page