import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({quiz,setquiz}) {
  ////
  function handledelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Item deleted successfully');
          setquiz(quiz.filter(item => item.id !== id));
        } else {
          console.error('Error deleting the item:', res.status);
        }
      }) 

      .then( (data) => console.log(data))
      .catch((error) => {
        console.error('Error deleting the item:', error);
      });

     
  }
  ////
  const alldata = quiz.map((item)=>(
<QuestionItem key={item.id} id={item.id} prompt={item.prompt} answers={item.answers } correctIndex={item.correctIndex}
  handledelete={handledelete}
/>
))
/////

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{alldata}</ul>
    </section>
  );
}

export default QuestionList;
