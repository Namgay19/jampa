const Amount = (props) => {
  return (
    <div className="bg-primary py-2 px-8 flex justify-evenly gap-8 rounded-lg">
      <div className="leading-6 md:leading-8">
        <p className="text-sm md:text-base">Amount needed</p>
        <p className="text-center">
          <span className="opacity-80">Nu.</span>{" "}
          <span className="font-semibold">{props.campaign.target_amount}</span>
        </p>
      </div>
      <div className="leading-6 md:leading-8">
        <p className="text-sm md:text-base">Amount raised</p>
        <p className="text-center">
          <span className="opacity-80">Nu.</span>{" "}
          <span className="font-semibold">{props.campaign.collected_amount}</span>
        </p>
      </div>
    </div>
  );
};

export default Amount;
