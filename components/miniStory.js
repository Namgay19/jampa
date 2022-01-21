import { useState } from "react";

const MiniStory = (props) => {
  const [showIndex, setShowIndex] = useState(1);

  const nextHandler = () => {
    setShowIndex((prevIndex) => {
      if (prevIndex === 2) {
        return prevIndex;
      }
      return prevIndex + 1;
    });
  };

  const prevHandler = () => {
    setShowIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="bg-primary py-4 lg:py-16 md:py-12 w-full">
      <div className="px-2 lg:px-40 md:px-12">
        <div className="flex justify-evenly items-center">
          <button onClick={prevHandler}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="75"
              height="75"
              className="opacity-20"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
          </button>
          <div className="mx-2 lg:mx-16 md:mx-4 lg:h-96 md:h-64 rounded-3xl text-center">
            <div className="text-center px-2 rounded-3xl text-sm lg:text-base mb-4 md:mb-0">
              <h1 className="text-xl lg:text-2xl md:text-xl font-bold lg:mt-12 md:mt-4 mb-2 md:mb-2">
                Success Stories
              </h1>
              <blockquote className="text-base leading-5 text-gray-500">
                "{props.stories[showIndex].header}"
                <cite> -{props.stories[showIndex].cite}</cite>
              </blockquote>
            </div>
            <img
              src={props.stories[showIndex].image}
              alt="images"
              className="rounded-lg object-none w-48 h-48 md:h-full md:w-10/12 ml-3 md:ml-6"
            />
            <p className="opacity-50 ml-3 mt-4 lg:mt-10 md:mt-6 text-sm text-left lg:text-base md:text-sm">
              {props.stories[showIndex].sub_header}
            </p>
          </div>
          <button onClick={nextHandler}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="75"
              height="75"
              className="opacity-20"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniStory;
