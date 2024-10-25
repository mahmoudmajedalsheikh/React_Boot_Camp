export default function StartScreen({numQuestions , dispatch}) {
  return (
    <div className="start">
      <h2>Welcome To React Quiz</h2>
      <h3>{numQuestions} question tom test your React mastery</h3>'
      <button className="btn btn-ui" onClick={()=>{dispatch({type:"start"})}}>Lets Start</button>
    </div>
  )
}
