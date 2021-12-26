import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const MiniDonation = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [donationCategory, setDonationCategory] = useState("Recent");

  const router = useRouter();

  const dropDownHandler = () => {
    setShowDropDown((prevValue) => !prevValue);
  };

  const categorySelectionHandler = (event) => {
    setShowDropDown(false);
    setDonationCategory(event.target.value);
  };


  const dropDown = (
    <div
      className="origin-top-right absolute bg-gray-200 right-0 mt-2 rounded-md shadow-lg px-4 ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className="py-1" role="none">
        <button
          className="text-gray-700 block px-2 py-2 text-sm hover:bg-gray-50"
          role="menuitem"
          id="menu-item-0"
          value="Recent"
          onClick={categorySelectionHandler}
        >
          Recent
        </button>
        <button
          className="text-gray-700 block px-2 py-2 text-sm hover:bg-gray-50"
          role="menuitem"
          id="menu-item-1"
          value="Highest"
          onClick={categorySelectionHandler}
        >
          Highest
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-between pl-4 py-4 pr-2 h-full shadow overflow-hidden sm:rounded-lg">
      <div>
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold opacity-80">Donations</h1>
          <div className="relative inline-block text-center">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={dropDownHandler}
              >
                {donationCategory}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {showDropDown && dropDown}
          </div>
        </div>

        <hr />
        <ul className="my-2 text-sm">
          <li className="flex gap-4 py-2" key="1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20"
              height="20"
              className="opacity-50"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path>
            </svg>
            Namgay Tenzin donated Nu.1000
          </li>
          <hr className="my-2" />
          <li className="flex gap-4 py-2" key="2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20"
              height="20"
              className="opacity-50"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path>
            </svg>
            Namgay donated Nu.1000
          </li>
          <hr className="my-2" />
          <li className="flex gap-4 py-2" key={Math.floor(Math.random * 100)}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20"
              height="20"
              className="opacity-50"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path>
            </svg>
            Namgay donated Nu.1000
          </li>
          <hr className="my-2" />
        </ul>
      </div>
      <div className="text-right">
        <Link href={`${router.asPath}/donations`}>
          <button className="font-semibold opacity-80 border px-2 rounded-lg">
            See more <span className="font-bold">...</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MiniDonation;
