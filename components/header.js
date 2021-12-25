const Header = () => {
  return (
    <div className="bg-primary w-full -mt-6">
      <div className="flex justify-around px-28 mt-5 pb-10">
        <div className="w-1/2 mt-32">
          <h1 className="text-6xl font-bold leading-tight drop-shadow-sm">
            Lets give someone a new Life
          </h1>
          <h3 className="text-3xl opacity-50">
            Small actions <span className="opacity-100">X</span> Lots of People
            = <span className="font-extrabold">Big Change</span>
          </h3>

          <p className="opacity-30 mt-16">
            A non profit website to enable a more streamlined approach to
            medical donations.
          </p>
        </div>
        <div className="mt-0">
          <img src="/patient.svg" alt="patient image" width="600" />
        </div>
      </div>
    </div>
  );
};

export default Header;
