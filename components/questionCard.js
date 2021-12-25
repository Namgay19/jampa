const QuestionCard = props => {
  return (
    <div className="bg-secondary h-auto px-8 py-4 rounded-lg mb-2">
      <h4 className="text-xl font-semibold">{props.question}</h4>
      <svg
        width="200"
        height="20"
        viewBox="0 0 329 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-2"
      >
        <path
          d="M3 16.3353C3 -4.86466 209.667 2.33531 328 16.3353"
          stroke="black"
          strokeWidth="6"
        />
      </svg>
      <ul className="opacity-80 list-disc mt-2 ml-4">
        {props.answers.map(answer =>(<li key={Math.floor(Math.random() * 100)}> {answer}</li>))}
      </ul>
    </div>
  );
};

export default QuestionCard;
