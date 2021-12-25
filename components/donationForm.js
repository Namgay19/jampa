import { useState } from "react";
import InternationalForm from "./internationalForm";
import NationalForm from "./nationalForm";

const DonationForm = () => {

  const [paymentMethod, setPaymentMethod] = useState('bhutan');

  const paymentHandler = event => {
    setPaymentMethod(event.target.value);
  }

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <p className="mt-1 text-sm text-gray-600 mb-2">
              Choose your preferred payment method.
            </p>
            <div className="mb-8" onChange={paymentHandler}>
              <input type="radio" name="payment" value="bhutan" id="bhutan" />
              <label htmlFor="bhutan" className="mr-8">
                Bhutan banks
              </label>
              <input
                type="radio"
                name="payment"
                value="international"
                id="international"
              />
              <label htmlFor="international">Credit/Debit card</label>
            </div>
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Donation Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                <ul className="list-disc pl-2">
                  <li key="1" className="mb-2">Enter an email address if you want to receive updates on campaign progress</li>
                  <li key="2" className="mb-2">Your payment Information will be encrypted and sent to the designated payment gateway.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {paymentMethod === 'bhutan' ? <NationalForm /> : <InternationalForm /> } 
          </div>
        </div>
      </div>
    </>
  );
};


export default DonationForm;
