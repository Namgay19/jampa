import { useRef, useEffect, useState } from "react";
import useCustomHttp from "./../hooks/custom-http";
import Loader from "../components/UI/loader";
import Modal from "../components/UI/modal";

const Login = (props) => {
  const { isLoading, error, sendRequest } = useCustomHttp();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const modalDetails = (
    <Modal
      showNormalModal={true}
      hasBackdrop={true}
      alignMiddle={false}
      hasButtons={false}
      header="Successfully Logged in"
      subHeader="Your details will be saved during campaign creation"
    />
  );

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const replacer = (key, value) => {
      if (value === "") {
        return undefined;
      }
      if (key === "amount") {
        return parseInt(value);
      }
      return value;
    };

    const requestConfig = {
      url: "/users/login",
      method: "POST",
      body: JSON.stringify(
        {
          email: email,
          password: password,
        },
        replacer
      ),
    };

    const getToken = (data, authorization) => {
      setShowSuccessModal(true);
      localStorage.setItem("jwtToken", authorization)
      setTimeout(() => {
        props.onHideForm();
        props.onLoggedIn();
      }, 1500);
    };

    sendRequest(requestConfig, getToken);
  };

  const cancelHandler = () => {
    props.onHideForm();
  };

  const showRegisterHandler = () => {
    props.onGoToRegister();
  };

  useEffect(() => {
    if (error !== null) {
      setShowErrorModal(true);
      const modalTimer = setTimeout(() => {
        setShowErrorModal(false);
      }, 2000);

      return () => {
        clearTimeout(modalTimer);
      };
    }
  }, [error]);

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        {isLoading && <Loader />}
        {showErrorModal && (
          <Modal
            header="Request Failed!"
            subHeader={error}
            showErrorModal={true}
          />
        )}
        {showSuccessModal && modalDetails}
        <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
                <div>
                  <img
                    className="mx-auto h-12 w-auto"
                    src="/cat_solid.svg"
                    alt="Workflow"
                  />

                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Or{" "}
                    <button
                      onClick={showRegisterHandler}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Register Here
                    </button>
                  </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        ref={emailRef}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        ref={passwordRef}
                      />
                    </div>
                  </div>
                  <div className="flex justify-evenly gap-5">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign in
                    </button>
                    <button
                      onClick={cancelHandler}
                      type="button"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
