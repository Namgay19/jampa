import Link from "next/link";
import { useRouter } from "next/router";
import Amount from "../amount";

const CampaignTop = () => {
  const router = useRouter();

  return (
    <div className="flex start gap-10 p-4 mt-2">
      <img
        src="/demoHealth.jpg"
        alt="campaign image"
        className="w-2/3 rounded-lg"
      />
      <div className="mt-6">
        <Amount />

        <div className="flex justify-start gap-2 mx-2 mt-8 opacity-80">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="clock"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
            ></path>
          </svg>
          3 days till the end of the campaign
        </div>

        <hr className="mb-6" />

        <div className="flex justify-start gap-4 mb-6">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="users"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            width="30"
            height="30"
          >
            <path
              fill="currentColor"
              d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
            ></path>
          </svg>
          <p>4000 people have donated</p>
        </div>

        <div className="flex justify-start gap-4 mb-6">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="female"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            width="30"
            height="30"
          >
            <path
              fill="currentColor"
              d="M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"
            ></path>
          </svg>
          <p>Campaign created by Mr. John Cena</p>
        </div>

        <hr className="mb-6" />

        <button className="flex justify-center gap-2 mb-4 border-2 w-full py-2 font-bold text-xl rounded-lg bg-sky-400">
          Share
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="share"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="30"
            height="30"
          >
            <path
              fill="currentColor"
              d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
            ></path>
          </svg>
        </button>
        <Link href={`${router.asPath}/donate`}>
          <button className="flex justify-center gap-2 mb-4 border-2 w-full py-2 font-bold text-xl rounded-lg bg-yellow-400">
            Donate
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="hand-holding-medical"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="30"
              height="30"
            >
              <path
                fill="currentColor"
                d="M159.88,175.82h64v64a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-64h64a16,16,0,0,0,16-16v-64a16,16,0,0,0-16-16h-64v-64a16,16,0,0,0-16-16h-64a16,16,0,0,0-16,16v64h-64a16,16,0,0,0-16,16v64A16,16,0,0,0,159.88,175.82ZM568.07,336.13a39.91,39.91,0,0,0-55.93-8.47L392.47,415.84H271.86a16,16,0,0,1,0-32H350.1c16,0,30.75-10.87,33.37-26.61a32.06,32.06,0,0,0-31.62-37.38h-160a117.7,117.7,0,0,0-74.12,26.25l-46.5,37.74H15.87a16.11,16.11,0,0,0-16,16v96a16.11,16.11,0,0,0,16,16h347a104.8,104.8,0,0,0,61.7-20.27L559.6,392A40,40,0,0,0,568.07,336.13Z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CampaignTop;
