import React from "react";

function Form({ formData, handleChange, resetForm }) {
  return (
    <section className="form-section">
      <h2>Enter Your Details</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />

        <label>Bio:</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="A short bio about yourself"
        />

        <label>Skills:</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="e.g., React, JavaScript"
        />

        <label>GitHub Link:</label>
        <input
          type="text"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="GitHub Profile URL"
        />

        <label>LinkedIn Link:</label>
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn Profile URL"
        />

        <button type="button" onClick={resetForm} className="reset-button">
          Reset
        </button>
      </form>
    </section>
  );
}

export default Form;
