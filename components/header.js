const Header = () => {
  return (
    <header className="bg-primary w-full">
      {/* NavBar */}
      <div className="px-28 flex justify-between pt-8">
        <h1 className="text-4xl tracking-wide font-extrabold leading-5">
          <span className="text-logFirst">Jam</span>
          <span className="text-logSecond">pa</span>
        </h1>
        <div className="flex gap-10 font-semibold">
          <nav className="underline decoration-4 decoration-slate-500">Home</nav>
          <nav>Campaigns</nav>
          <nav>Contact Us</nav>
          <nav className="-mt-2">
            <button className="border-2 flex flex-wrap p-1 rounded-md font-semibold bg-gray-200">
              SignUp/Login
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sign-in-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
                className="ml-2"
              >
                <path
                  fill="currentColor"
                  d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
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
    </header>
  );
};

export default Header;
