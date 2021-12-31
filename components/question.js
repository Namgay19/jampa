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
      <div className="px-2 lg:px-40 md:px-12 py-4 lg:py-12 md:py-6">
        <h1 className="text-center text-xl md:text-2xl font-semibold underline decoration-dashed decoration-2">FAQ</h1>
        <div className="flex justify-center pt-2 md:gap-4 gap-2">
          <div className="w-2/3">
            <QuestionCard
              question="What is this site for?"
              answers={answers1}
            ></QuestionCard>
            <QuestionCard
              question="Do we make profits?"
              answers={answers2}
            ></QuestionCard>
          </div>
          <div className="w-1/3">
            <img
              src="/man_answering.svg"
              alt="answer man image"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
