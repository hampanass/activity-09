import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: "",
    github: "",
    linkedin: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      bio: "",
      skills: "",
      github: "",
      linkedin: "",
    });
  };

  return (
    <div className="app">
      <Header />
      <main className="container">
        <Form formData={formData} handleChange={handleChange} resetForm={resetForm} />
        <Preview formData={formData} />
      </main>
    </div>
  );
}

export default App;
