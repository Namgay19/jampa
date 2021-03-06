import Link from "next/link";

const CampaignButton = (props) => {
  const redirectionLink =
    props.id !== undefined ? `/campaigns/${props.id}` : "/campaigns";

  return (
    <Link href={redirectionLink}>
      <button className="border-2 py-1 px-1 rounded-md bg-primary font-semibold flex ml-2 lg:text-base md:text-base">
        {props.message}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="angle-double-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="25"
          height="25"
          className="ml-2"
        >
          <path
            fill="currentColor"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
          ></path>
        </svg>
      </button>
    </Link>
  );
};

export default CampaignButton;
