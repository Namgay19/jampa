import { useRouter } from "next/router";
import {
  useRef,
  useContext,
  useState,
  useEffect,
} from "react/cjs/react.development";
import useCustomHttp from "../../hooks/custom-http";
import Modal from "../../components/UI/modal";
import Loader from "../../components/UI/loader";
import ModalContext from "../../store/modal-context";

const NationalForm = () => {
  const router = useRouter();
  const modCtx = useContext(ModalContext);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { isLoading, error, sendRequest } = useCustomHttp();

  const { id } = router.query;
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const bankRef = useRef();
  const accountNumberRef = useRef();
  const amountRef = useRef();

  const donationHandler = (event) => {
    event.preventDefault();

    const firstName = firstnameRef.current.value;
    const lastName = lastnameRef.current.value;
    const email = emailRef.current.value;
    const amount = amountRef.current.value;
    const accountNumber = accountNumberRef.current.value;

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
      url: `/campaigns/${id}/donate`,
      method: "POST",
      body: JSON.stringify(
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          payment_method: "national",
          amount: amount,
          account_number: accountNumber,
        },
        replacer
      ),
    };

    const getId = (data) => {
      modCtx.setShowModal();
      router.push(`/campaigns/${id}/donations`);
    };

    sendRequest(requestConfig, getId);
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
      {isLoading && <Loader />}
      {showErrorModal && (
        <Modal
          header="Request Failed!"
          subHeader={error}
          showErrorModal={true}
        />
      )}
      <form onSubmit={donationHandler}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  ref={firstnameRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  ref={lastnameRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  ref={emailRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="bank"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bank
                </label>
                <select
                  id="bank"
                  name="bank"
                  autoComplete="bank"
                  ref={bankRef}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Bank of Bhutan</option>
                  <option>Bhutan National Bank</option>
                  <option>Punjab National Bank</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="account-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  autoComplete="account-number"
                  ref={accountNumberRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Donation amount
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  ref={amountRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                  placeholder="Nu. 100"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NationalForm;
