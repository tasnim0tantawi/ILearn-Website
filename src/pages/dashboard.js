import React from "react";
import Card from "../components/Card";

function Dashboard() {
  const [courses, setCourses] = React.useState([
    {
      id: 1,
      name: "React",
      description: "This is a React course",
      category: "web",
    },
    {
      id: 2,
      name: "Angular",
      description: "This is an Angular course",
      category: "web",
    },
    {
      id: 3,
      name: "Vue",
      description: "This is a Vue course",
      category: "web",
    },
    {
      id: 4,
      name: "English",
      description: "This is an English course",
      category: "language",
    },
    {
      id: 5,
      name: "Spanish",
      description: "This is a Spanish course",
      category: "language",

    }, 
    {
      id: 6,
      name: "Tasnim",
      description: "This is a Tasnim course",
      category: "Smartness and beauty of Tasnim",
    }
  ]);
  return (
    <div>
      <h1>Dashboard</h1>
      {courses.map((course) => (
        <Card
          key={course.id}
          name={course.name}
          description={course.description}
        />
      ))}

      {courses
        .filter((course) => course.category === "web")
        .map((course) => (
          <Card
            key={course.id}
            name={course.name}
            description={course.description}
          />
        ))}
    </div>
  );
}

export default Dashboard;
