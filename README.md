# React Mapping 
This project demonstrates **three levels of mapping in React** using functional components:  
**Simple Example (Fruit List)**, **Medium Example (User List)**, and **Hard Example (Courses with Nested Mapping)**.  
Each example builds upon the previous one, introducing more complexity in how data is displayed.

---

## **What is Mapping in React?**

In React, `.map()` is a JavaScript array method used to iterate over an array and return a new array of JSX elements.  
It’s a powerful way to dynamically generate UI from data, instead of manually writing repetitive HTML.

---

## **Simple Example – Fruit List**

In this example, we have a simple array of strings (`fruits`) and display each fruit inside a `<li>` element.  
The `.map()` method iterates over each fruit and returns a list item.

**Key points:**
- The array contains only strings.
- The `key` attribute uses the `index` from `.map()`.
- Output is a simple unordered list.

```jsx
const fruits = ['Apple', 'Banana', 'Mango'];

<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

##Medium Example – User List
This example introduces objects in an array. Each object contains id, name, and age properties.
We map over the array of users and display each user's name and age in a styled card.

Key points:

The array contains objects instead of strings.

The key attribute uses a unique ID from each object.

Each card has its own styling for better readability.

```jsx
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Emma", age: 30 },
  { id: 3, name: "Liam", age: 22 }
];

{users.map((user) => (
  <div key={user.id}>
    <h3>{user.name}</h3>
    <p>Age: {user.age}</p>
  </div>
))}
```

Hard Example – Courses with Nested Mapping
In this advanced example, we use nested mapping.
We have an array of courses, and each course contains another array called topics.
We first map over courses, then for each course, we map over its topics.

Key points:

Uses nested mapping for multi-level data.

Checks if topics array has items before rendering the list.

Displays a "No topics available" message when the array is empty.

Demonstrates conditional rendering in React.

```jsx
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

{courses.map((course) => (
  <div key={course.id}>
    <h2>{course.title}</h2>
    {course.topics.length > 0 ? (
      <ul>
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    ) : (
      <p>No topics available</p>
    )}
  </div>
))}
```

##Conclusion

Simple Example: Mapping over a basic array of strings.

Medium Example: Mapping over an array of objects with multiple properties.

Hard Example: Nested mapping with conditional rendering for complex data structures.
