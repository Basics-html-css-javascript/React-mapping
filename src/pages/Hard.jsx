import React from "react";

function Hard() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      topics: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Data Science",
      topics: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      id: 3,
      title: "Empty Course",
      topics: []
    }
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-green-100 to-green-300 rounded-xl shadow-lg mt-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Courses</h1>
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition duration-200"
        >
          <h2 className="text-xl font-semibold text-green-700">{course.title}</h2>
          {course.topics.length > 0 ? (
            <ul className="list-disc pl-5 mt-2 text-green-600">
              {course.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500 font-medium mt-2">No topics available</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Hard;
