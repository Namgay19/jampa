import QuestionCard from "./questionCard";

const Question = () => {
  const answers1 = [
    "To streamline the donation process",
    "Permit only verified individuals to campaign",
    "Enable donations from within Bhutan and abroad",
  ];

  const answers2 = [
      "No, this is strictly supposed to be run in a non profit manner"
  ]

  return (
    <div className="bg-primary w-full">
      <div className="px-40 py-16">
        <h2 className="text-3xl font-bold shadow-sm shadow-transparent tracking-wide">
          Common Questions
        </h2>
        <div className="flex justify-evenly pt-10 gap-10">
          <QuestionCard
            question="What is this site for?"
            answers={answers1}
          ></QuestionCard>
          <QuestionCard
            question="Do we make profits?"
            answers={answers2}
          ></QuestionCard>
          <QuestionCard
            question="What is this site for?"
            answers={answers1}
          ></QuestionCard>
        </div>
      </div>
    </div>
  );
};

export default Question;
