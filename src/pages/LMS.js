import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footur";

const LMS = () => {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);
  const [assignmentFile, setAssignmentFile] = useState(null);

  const courses = [
    { id: 1, title: "React for Beginners", description: "Learn React from scratch." },
    { id: 2, title: "Advanced JavaScript", description: "Master JavaScript concepts." },
    { id: 3, title: "Web Design Basics", description: "Learn the fundamentals of web design." },
  ];

  const assignments = [
    { id: 1, title: "React Project", dueDate: "2025-01-15" },
    { id: 2, title: "JavaScript Quiz", dueDate: "2025-01-18" },
  ];

  const quizzes = [
    {
      id: 1,
      title: "React Quiz 1",
      questions: [
        { id: 1, question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
        { id: 2, question: "What does JSX stand for?", options: ["JavaScript XML", "JavaScript Extension", "JavaScript X"], answer: "JavaScript XML" },
      ]
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      questions: [
        { id: 1, question: "What is a closure?", options: ["A type of function", "A function inside another function", "A variable scope"], answer: "A function inside another function" },
      ]
    },
  ];

  const grades = [
    { id: 1, course: "React for Beginners", grade: "A+" },
    { id: 2, course: "Advanced JavaScript", grade: "A" },
  ];

  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Student",
  };

  const handleQuizAnswer = (questionId, selectedOption) => {
    setQuizAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption
    }));
  };

  const handleQuizSubmit = (quizId) => {
    const quiz = quizzes.find((q) => q.id === quizId);
    const score = quiz.questions.reduce((acc, question) => {
      if (quizAnswers[question.id] === question.answer) acc++;
      return acc;
    }, 0);
    setQuizResults({ score, total: quiz.questions.length });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAssignmentFile(file);
  };

  const handleSubmitAssignment = () => {
    if (assignmentFile) {
      alert("Assignment submitted successfully!");
    } else {
      alert("Please select an assignment file before submitting.");
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome to Your Dashboard</h2>
            <p className="text-gray-600">Manage your learning activities in one place.</p>
          </div>
        );
      case "courses":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "assignments":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Assignments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-gray-800">{assignment.title}</h3>
                  <p className="text-gray-600 mt-2">Due Date: {assignment.dueDate}</p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={handleSubmitAssignment}
                    className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                  >
                    Submit Assignment
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "quizzes":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Quizzes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
                  <button
                    onClick={() => setSelectedQuiz(quiz.id)}
                    className="text-lg font-bold text-blue-500 hover:text-blue-700"
                  >
                    {quiz.title}
                  </button>
                </div>
              ))}
            </div>
            {selectedQuiz && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Attempt the Quiz</h3>
                {quizzes
                  .find((quiz) => quiz.id === selectedQuiz)
                  .questions.map((question) => (
                    <div key={question.id} className="mt-4">
                      <p className="text-lg">{question.question}</p>
                      <div className="space-y-2 mt-2">
                        {question.options.map((option) => (
                          <label key={option} className="block text-gray-700">
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option}
                              onChange={() => handleQuizAnswer(question.id, option)}
                              checked={quizAnswers[question.id] === option}
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                <button
                  onClick={() => handleQuizSubmit(selectedQuiz)}
                  className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                >
                  Submit Quiz
                </button>
                {quizResults && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Results</h3>
                    <p>
                      You scored {quizResults.score} out of {quizResults.total}.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      case "grades":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Grades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {grades.map((grade) => (
                <div key={grade.id} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-gray-800">{grade.course}</h3>
                  <p className="text-gray-600">Grade: {grade.grade}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Profile</h2>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Role: {profile.role}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <div className="flex space-x-6">
          <div className="w-1/4">
            <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
              <button
                onClick={() => setSelectedSection("dashboard")}
                className="w-full py-2 text-left text-blue-500 hover:text-blue-700"
              >
                Dashboard
              </button>
              <button
                onClick={() => setSelectedSection("courses")}
                className="w-full py-2 text-left text-blue-500 hover:text-blue-700"
              >
                Courses
              </button>
              <button
                onClick={() => setSelectedSection("assignments")}
                className="w-full py-2 text-left text-blue-500 hover:text-blue-700"
              >
                Assignments
              </button>
              <button
                onClick={() => setSelectedSection("quizzes")}
                className="w-full py-2 text-left text-blue-500 hover:text-blue-700"
              >
                Quizzes
              </button>
              <button
                onClick={() => setSelectedSection("grades")}
                className="w-full py-2 text-left text-blue-500 hover:text-blue-700"
              >
                Grades
              </button>
              <button
                onClick={() => setSelectedSection("profile")}
                className="w-full py-2 text-left text-blue-500 hover:text-blue-700"
              >
                Profile
              </button>
            </div>
          </div>
          <div className="w-3/4">{renderContent()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LMS;
