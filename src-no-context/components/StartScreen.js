function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React quiz!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className="btn - btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Begin
      </button>
    </div>
  );
}

export default StartScreen;
