import { useRef, useEffect, useState } from "react";
import useCustomHttp from "./../hooks/custom-http";
import Loader from "../components/UI/loader";
import Modal from "../components/UI/modal";

const Register = (props) => {
  const { isLoading, error, sendRequest } = useCustomHttp();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();

  const modalDetails = (
    <Modal
      showNormalModal={true}
      hasBackdrop={true}
      alignMiddle={false}
      hasButtons={false}
      header="Account Created Successfully"
      subHeader="You can now create campaigns"
    />
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const replacer = (key, value) => {
      if (value === "") {
        return undefined;
      }
      if (key === "amount") {
        return parseInt(value);
      }
      return value;
    };

    const firstName = firstnameRef.current.value;
    const lastName = lastnameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const requestCampaignConfig = {
      url: "/users",
      method: "POST",
      body: JSON.stringify(
        {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          email: email,
          password: password,
        },
        replacer
      ),
    };

    const getId = (data) => {
      setShowSuccessModal(true);
      setTimeout(()=>{
        props.onGoToLogin();
      }, 1500)
    };

    sendRequest(requestCampaignConfig, getId);
  };

  const cancelHandler = () => {
    props.onHideForm();
  };

  const showLoginHandler = () => {
    props.onGoToLogin();
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
    <div>
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
                      Create an account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      Or{" "}
                      <button
                        onClick={showLoginHandler}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in Here
                      </button>
                    </p>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="first-name" className="sr-only">
                          First Name
                        </label>
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="First Name"
                          ref={firstnameRef}
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="sr-only">
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Last Name"
                          ref={lastnameRef}
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="sr-only">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="number"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Phone number"
                          ref={phoneRef}
                        />
                      </div>
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
                        Sign up
                      </button>
                      <button
                        type="button"
                        onClick={cancelHandler}
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
    </div>
  );
};

export default Register;
