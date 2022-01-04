const QuestionCard = props => {
  return (
    <div className="bg-secondary h-auto px-2 lg:px-8 md:px-2 lg:py-2 md:py-1 rounded-lg mb-2">
      <h4 className="lg:text-xl md:text-lg font-semibold">{props.question}</h4>
      <svg
        viewBox="0 0 329 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-1 w-7/12 md:w-6/12 lg:w-4/12"
      >
        <path
          d="M3 16.3353C3 -4.86466 209.667 2.33531 328 16.3353"
          stroke="black"
          strokeWidth="6"
        />
      </svg>
      <ul className="opacity-80 list-disc lg:mt-2 mt-0 md:ml-4 ml-2 lg:text-base text-sm">
        {props.answers.map(answer =>(<li key={Math.floor(Math.random() * 100)}> {answer}</li>))}
      </ul>
    </div>
  );
};

export default QuestionCard;
