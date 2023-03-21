import { StudentCrud } from "../components/StudentCrud";
import React, { useState, useEffect } from "react";
import constants from "../static/constants";
import Student from "../api/student";

export const Index = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    Student[constants.index](setStudents);
  }, []);

  return (
    <div className="container mx-auto my-10 border border-gray-200">
      <StudentCrud students={students} />
    </div>
  );
};
