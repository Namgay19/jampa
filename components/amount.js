const Amount = () => {
  return (
    <div className="bg-primary py-2 px-8 flex justify-evenly gap-8 rounded-lg mt-4 mb-4">
      <div className="leading-8">
        <p>Amount needed</p>
        <p className="text-center">
          <span className="opacity-80">Nu.</span>{" "}
          <span className="font-semibold">100,000</span>
        </p>
      </div>
      <div className="leading-8">
        <p>Amount raised</p>
        <p className="text-center">
          <span className="opacity-80">Nu.</span>{" "}
          <span className="font-semibold">100,000</span>
        </p>
      </div>
    </div>
  );
};

export default Amount;
