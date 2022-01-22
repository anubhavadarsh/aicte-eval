import React, { useEffect } from "react";

export const Alert = ({ color, message, showAlert, setShowAlert }) => {
  useEffect(() => {
    const timer = setTimeout(
      () =>
        setShowAlert({
          show: false,
          message: "",
          color: "",
        }),
      3000
    );

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed top-0 z-40 left-0 w-full flex items-center justify-center p-4">
      <div
        key="alert"
        className={`w-1/2 text-white px-6 py-4 border-0 rounded ${color} flex justify-between align-center`}
      >
        <div>
          <span className="mr-5 inline-flex justify-center align-center">
            🤌
          </span>
          <span className="inline-block align-middle mr-8">{message}</span>
        </div>
        <button
          className="bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none inline-flex justify-center align-center"
          onClick={() =>
            setShowAlert({
              show: false,
              message: "",
              color: "",
            })
          }
        >
          <span>×</span>
        </button>
      </div>
    </div>
  );
};
