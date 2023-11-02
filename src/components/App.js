import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quiz,setquiz]=useState([])
  useEffect(()=>{
fetch("http://localhost:4000/questions")
.then(r=>r.json())
.then ((data)=>(
  setquiz(data)
  
  ))
  
  },[])
  
  console.log(quiz)
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm QuestionList quiz={quiz} setquiz={setquiz} /> : <QuestionList quiz={quiz} setquiz={setquiz}/>}
    </main>
  );
}

export default App;
