import React from "react";
import reactDom from "react-dom";
import Input from "./Input";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const portalElement = document.getElementById("overlays");

const ModalForm = ({
  handleFormSubmit,
  name,
  setName,
  designation,
  setDesignation,
  about,
  setAbout,
  image,
  imageRef,
  uploadImage,
  facebook,
  setFacebook,
  twitter,
  setTwitter,
  instagram,
  setInstagram,
  setShowModal,
  buttonDisabled,
}) => {
  return reactDom.createPortal(
    <div className="absolute z-40 top-0 left-0 w-full min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <form onSubmit={handleFormSubmit}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <Input
                htmlFor="name"
                label="Name"
                placeholder="Jason"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                htmlFor="designation"
                label="Designation"
                placeholder="Lead"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  About
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <div className="mt-1 flex items-center">
                  <span className="relative inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    {!image && (
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                    {image && (
                      <img src={image} className="h-full w-full" alt="" />
                    )}
                    <input
                      ref={imageRef}
                      type="file"
                      className="hidden"
                      onChange={(e) => uploadImage(e)}
                      accept="image/*"
                    />
                  </span>
                  <button
                    onClick={() => imageRef.current.click()}
                    type="button"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Change
                  </button>
                </div>
              </div>
              <SocialInput
                htmlFor="facebook"
                label="Facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
              <SocialInput
                htmlFor="instagram"
                label="Instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
              <SocialInput
                htmlFor="twitter"
                label="Twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="reset"
                className="inline-flex justify-center py-2 px-4 outline-2 outline-blue-600 shadow-sm text-sm font-medium rounded-md text-blue-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={classNames(
                  buttonDisabled
                    ? "bg-slate-500 cursor-not-allowed text-gray-300"
                    : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                  "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"
                )}
                disabled={buttonDisabled}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>,
    portalElement
  );
};

const SocialInput = ({ htmlFor, label, value, onChange }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 sm:col-span-2">
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            http://
          </span>
          <input
            type="text"
            name={htmlFor}
            id={htmlFor}
            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
            placeholder="www.example.com"
            onChange={(e) => onChange(e)}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
