import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({quiz}) {
  console.log(quiz)
  const alldata = quiz.map((item)=>(
<QuestionItem key={item.id} id={item.id} prompt={item.prompt} answers={item.answers } correctIndex={item.correctIndex}/>
))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{alldata}</ul>
    </section>
  );
}

export default QuestionList;
