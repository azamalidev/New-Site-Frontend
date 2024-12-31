import React, { useState } from 'react';

export default function CourseSelection() {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div>
      <h2>Select a Course</h2>
      <button onClick={() => handleCourseSelect('Course 1')}>Course 1</button>
      <button onClick={() => handleCourseSelect('Course 2')}>Course 2</button>
      <button onClick={() => handleCourseSelect('Course 3')}>Course 3</button>
      <div>Selected Course: {selectedCourse}</div>
    </div>
  );
}
