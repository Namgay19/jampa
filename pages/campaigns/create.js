import { useRef, useContext } from "react";
import Wrapper from "../../components/wrapper";
import { useRouter } from "next/router";
import ModalContext from "../../store/modal-context";
import useCustomHttp from "../../hooks/custom-http";
import Loader from "../../components/UI/loader";
import { useState } from "react/cjs/react.development";

const CreateCampaign = () => {
  const router = useRouter();
  const modCtx = useContext(ModalContext);
  const [image, setImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const { isLoading, error, sendRequest } = useCustomHttp();

  const headerRef = useRef();
  const subheaderRef = useRef();
  const categoryRef = useRef();
  const endDateRef = useRef();
  const descriptionRef = useRef();

  const fileSelectionHandler = (event) => {
    setImage(event.target.files[0]);
    setImageSelected(true);
  };

  const campaignCreationHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("header", headerRef.current.value);
    formData.append("subHeader", subheaderRef.current.value);
    formData.append("category", categoryRef.current.value);
    formData.append("endDate", endDateRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("image", image);

    console.log(formData);

    const requestConfig = {
      url: "https://namgay-19-default-rtdb.firebaseio.com/campaigns.json",
      method: "POST",
      body: formData,
    };

    const getId = (data) => {
      modCtx.setShowModal();
      router.push(`/campaigns/${data.name}`);
    };

    sendRequest(requestConfig, getId);
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <div className="px-2 md:px-12 lg:px-40 md:py-4">
        <h1 className="text-3xl font-semibold mb-4 mt-4">Create a Campaign</h1>
        <form className="mb-8" onSubmit={campaignCreationHandler}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Campaign Header
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    ref={headerRef}
                    className="mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-5">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Campaign SubHeader
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    ref={subheaderRef}
                    className="mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="bank"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Campaign Category
                  </label>
                  <select
                    id="bank"
                    name="bank"
                    autoComplete="bank"
                    ref={categoryRef}
                    className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Medical needs</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Campaign End date
                  </label>
                  <input
                    type="date"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    ref={endDateRef}
                    className="px-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2"
                    placeholder="Select date"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Campaign Image
                  </label>
                  <div className="mt-1 flex justify-center gap-5 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    {imageSelected && (
                      <img
                        src={URL.createObjectURL(image)}
                        alt="selected image"
                        className="w-36 h-32 md:w-48 md:h-40 rounded-lg"
                      />
                    )}
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={fileSelectionHandler}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 lg:col-span-4">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Campaign Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      ref={descriptionRef}
                      className="h-48 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description about your campaign. Maximum word limit is
                    500.
                  </p>
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
    </Wrapper>
  );
};

export default CreateCampaign;
