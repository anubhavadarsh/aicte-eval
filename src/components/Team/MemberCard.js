import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { teamAction } from "store/teamSlice";
import { ReactComponent as FacebookIcon } from "assets/facebook-social-icon-gray.svg";
import { ReactComponent as TwitterIcon } from "assets/twitter-social-icon-gray.svg";
import { ReactComponent as InstagramIcon } from "assets/instagram-social-icon-gray.svg";
import EditMemberModal from "./EditMemberModal";
import useLongPress from "hooks/useLongPress";
import MyPopover from "components/UI/Popover";

const MemberCard = ({
  id,
  image,
  name,
  designation,
  about,
  twitter,
  instagram,
  facebook,
}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const popoverRef = useRef();

  const handleLongPress = () => {
    dispatch(teamAction.removeMember({ id }));
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 700,
  };

  const longPressEvent = useLongPress(
    handleLongPress,
    handleClick,
    defaultOptions
  );

  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg"
        {...longPressEvent}
        onMouseEnter={() => popoverRef.current.click()}
      >
        <div className="flex shadow-lg rounded-full overflow-hidden h-40 w-40">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>

        <h2 className="mt-4 font-bold text-xl text-black">{name}</h2>
        <h6 className="mt-2 text-sm font-medium text-black">{designation}</h6>

        <p className="text-xs text-black text-center mt-3">{about}</p>

        <ul className="flex flex-row mt-4 space-x-2">
          <li>
            <a
              href={facebook}
              className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a
              href={twitter}
              className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href={instagram}
              className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
      <MyPopover ref={popoverRef} />
      {showModal && (
        <EditMemberModal
          inpId={id}
          inpName={name}
          inpAbout={about}
          inpDesignation={designation}
          inpFacebook={facebook}
          inpImage={image}
          inpInstagram={instagram}
          inpTwitter={twitter}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default MemberCard;
