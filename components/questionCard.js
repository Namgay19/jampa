const QuestionCard = props => {
  return (
    <div className="bg-secondary h-auto lg:px-8 md:px-2 lg:py-4 md:py-1 rounded-lg lg:mb-2 md:mb-1">
      <h4 className="lg:text-xl md:text-lg font-semibold">{props.question}</h4>
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
      <ul className="opacity-80 list-disc lg:mt-2 md:mt-0 ml-4 lg:text-base md:text-sm">
        {props.answers.map(answer =>(<li key={Math.floor(Math.random() * 100)}> {answer}</li>))}
      </ul>
    </div>
  );
};

export default QuestionCard;
