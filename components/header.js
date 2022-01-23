const Header = () => {
  return (
    <div className="bg-primary w-full">
      <div className="flex flex-col-reverse md:grid md:grid-cols-6 px-1 lg:px-28 md:px-10 pb-6 md:pb-10">
        <div className="text-center md:text-left mt-2 md:col-span-3 lg:mt-32 md:mt-10">
          <h1 className="text-2xl lg:text-6xl md:text-4xl font-bold leading-tight drop-shadow-sm">
            Lets give someone a new Life
          </h1>
          <h3 className="text-lg lg:text-3xl md:text-xl opacity-50">
            Small actions <span className="opacity-100">X</span> Lots of People
            = <span className="font-extrabold">Big Change</span>
          </h3>

          <p className="opacity-30 text-sm mt-4 lg:mt-16 md:mt-8 lg:text-base md:text-sm">
            A non profit website to enable a more streamlined approach to
            medical donations.
          </p>
        </div>
        <div className="md:col-span-3 pl-16 md:pl-0">
          <img src="/patient.svg" alt="patient image" className="bg-primary w-4/5 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
