import React from 'react'

const Medium = () => {
  const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Emma", age: 30 },
    { id: 3, name: "Liam", age: 22 }
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl shadow-lg mt-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">User List</h1>
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white p-4 rounded-lg shadow-md mb-3 hover:bg-blue-50 transition duration-200"
        >
          <h3 className="text-lg font-semibold text-blue-700">{user.name}</h3>
          <p className="text-blue-600">Age: {user.age}</p>
        </div>
      ))}
    </div>
  )
}

export default Medium
