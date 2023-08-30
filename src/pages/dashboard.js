import React from "react";
import Card from "../components/Card";



function Dashboard() {
    const [courses, setCourses] = React.useState([
        {"id": 1, "name": "React", "description": "This is a React course"},
        {"id": 2, "name": "Angular", "description": "This is an Angular course"},
        {"id": 3, "name": "Vue", "description": "This is a Vue course"}
    ]);
    return (
        <div>
        <h1>Dashboard</h1>
            {
                courses.map((course) => (
                    <Card key={course.id} name={course.name} description={course.description} />
                ))
            }

        </div>
    );
}

export default Dashboard;