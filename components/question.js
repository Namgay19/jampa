import QuestionCard from "./questionCard";

const Question = () => {
  const answers1 = [
    "To streamline the donation process",
    "Permit only verified individuals to campaign",
    "Enable donations from within Bhutan and abroad",
  ];

  const answers2 = [
    "No, this is strictly supposed to be run in a non profit manner",
  ];

  return (
    <div className="bg-secondary w-full h-auto">
      <div className="px-40 py-16">
        <div className="flex justify-center pt-4">
          <div>
            <QuestionCard
              question="What is this site for?"
              answers={answers1}
            ></QuestionCard>
            <QuestionCard
              question="Do we make profits?"
              answers={answers2}
            ></QuestionCard>
          </div>
          <img src="/man_answering.svg" alt="answer man image" width="500" />
        </div>
      </div>
    </div>
  );
};

export default Question;
