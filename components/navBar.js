import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  const underlineClass =
    "flex gap-2 underline decoration-4 decoration-slate-500 underline-offset-8 hover:bg-gray-200 px-2 rounded-lg pt-2";
  const homeUnderline =
    router.pathname === "/"
      ? underlineClass
      : "hover:bg-gray-200 px-2 rounded-lg pt-2";
  const campaignUnderline =
    router.pathname === "/campaigns"
      ? underlineClass
      : "hover:bg-gray-200 px-2 rounded-lg pt-2"; 

  const midNav = (
    <div className="flex justify-between lg:flex md:flex lg:gap-20 md:gap-10 sm:gap-2 font-semibold text-base pb-2 md:pb-2 md:pt-2 border-y-2 md:border-0 lg:border-0">
      <div className={homeUnderline}>
        <Link href="/">Home</Link>
      </div>
      <div className={campaignUnderline}>
        <Link href="/campaigns">Campaigns</Link>
      </div>
      <div className="flex flex-wrap pt-2">
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
          className="ml-1 mt-1"
        >
          <path
            fill="currentColor"
            d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
          ></path>
        </svg>
      </div>
    </div>
  );

  return (
    <header className="bg-primary w-full">
      <div className="text-center px-1 lg:px-28 md:px-10 sm:px-10 md:py-2 md:flex lg:flex justify-between">
        <h1 className="text-3xl lg:text-4xl md:text-4xl sm:text-4xl tracking-wide font-extrabold py-2">
          <span className="text-logFirst">Jam</span>
          <span className="text-logSecond">pa</span>
        </h1>
        {midNav}
      </div>
    </header>
  );
};

export default NavBar;
