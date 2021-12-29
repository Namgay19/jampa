const Header = () => {
  return (
    <div className="bg-primary w-full">
      <div className="grid grid-cols-6 lg:px-28 md:px-10 pb-10">
        <div className="col-span-3 lg:mt-32 md:mt-10">
          <h1 className="lg:text-6xl md:text-4xl font-bold leading-tight drop-shadow-sm">
            Lets give someone a new Life
          </h1>
          <h3 className="lg:text-3xl md:text-xl opacity-50">
            Small actions <span className="opacity-100">X</span> Lots of People
            = <span className="font-extrabold">Big Change</span>
          </h3>

          <p className="opacity-30 lg:mt-16 md:mt-8 lg:text-base md:text-sm">
            A non profit website to enable a more streamlined approach to
            medical donations.
          </p>
        </div>
        <div className="col-span-3">
          <img src="/patient.svg" alt="patient image"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
