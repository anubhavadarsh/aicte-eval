import React from "react";
import reactDom from "react-dom";

const portalElement = document.getElementById("overlays");

const Backdrop = () => {
  return reactDom.createPortal(
    <div
      className="fixed top-0 left-0 z-30
								 w-full h-full min-h-screen inset-0
		 						 backdrop-blur dark:border-slate-50/[0.06]
		  					 bg-white supports-backdrop-blur:bg-white/95
			 					 dark:bg-slate-900/75 overflow-hidden"
    ></div>,
    portalElement
  );
};

export default Backdrop;
