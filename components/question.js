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
      <div className="lg:px-40 md:px-12 lg:py-16 md:py-10">
        <div className="flex justify-center pt-2 gap-4">
          <div className="w-1/2">
            <QuestionCard
              question="What is this site for?"
              answers={answers1}
            ></QuestionCard>
            <QuestionCard
              question="Do we make profits?"
              answers={answers2}
            ></QuestionCard>
          </div>
          <div className="w-1/2">
          <img src="/man_answering.svg" alt="answer man image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
