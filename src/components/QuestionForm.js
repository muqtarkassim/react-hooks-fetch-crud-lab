import React, { useState } from "react";

function QuestionForm({ quiz, setquiz }) {
  //console.log(quiz);

  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name.startsWith("answer")) {
      // Update the corresponding answer in the answers array
      const index = parseInt(name.replace("answer", ""), 10);
      const updatedAnswers = [...formData.answers];
      updatedAnswers[index] = value;

      setFormData({
        ...formData,
        answers: updatedAnswers,
      });
    } else {
      // Handle other form fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // POST the formData to your server here...
    fetch("http://localhost:4000/questions",{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json', },
      body: JSON.stringify(formData), // Convert your data to JSON
      })
      .then(r=>r.json())
      .then(data=> {
      setquiz([...quiz,data])
      console.log(data)})
      
    // Reset the form data
    setFormData({
      prompt: "",
      answers: ["", "", "", ""],
      correctIndex: 0,
    });
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        {formData.answers.map((answer, index) => (
          <label key={`answer${index}`}>
            {`Answer ${index + 1}:`}
            <input
              type="text"
              name={`answer${index}`}
              value={answer}
              onChange={handleChange}
            />
          </label>
        ))}
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            {formData.answers.map((answer, index) => (
              <option key={`answer${index}`} value={index}>
                {answer}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;