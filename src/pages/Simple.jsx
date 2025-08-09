import React from 'react'

const Simple = () => {
  const fruits = ['Apple', 'Banana', 'Mango'];
  return (
    <div className="p-6 bg-gradient-to-r from-pink-100 to-pink-300 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-pink-800 mb-4">Fruit List</h1>
      <ul className="space-y-2">
        {fruits.map((fruit, index) => (
          <li
            key={index}
            className="bg-white px-4 py-2 rounded-lg shadow hover:scale-105 transform transition duration-200 cursor-pointer text-pink-700 font-medium"
          >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Simple
