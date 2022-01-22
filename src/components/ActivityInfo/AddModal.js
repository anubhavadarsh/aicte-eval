import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "components/UI/Backdrop";
import { teamAction } from "store/teamSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddModal = ({ sl, setShowModal }) => {
  return (
    <>
      <Backdrop />
      <Modal sl={sl} setShowModal={setShowModal} />
    </>
  );
};

const Modal = ({ sl, setShowModal }) => {
  const team = useSelector((state) => state.team);

  return (
    <div
      className="fixed z-40 top-0 left-0 w-full min-h-screen flex items-center justify-center"
      onClick={() => setShowModal(false)}
    >
      <div>
        <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b w-full">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Member database
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about member.
            </p>
          </div>
          <ul className="flex flex-col divide divide-y">
            {team.members.map((member) => (
              <ListItem member={member} activitySl={sl} key={member?.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ member, activitySl }) => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.team.activities.activities);

  let selected = null;

  for (let activity of activities) {
    if (activity.sl === activitySl) {
      const existingMember = activity.members.find((m) => m.id === member.id);

      selected = existingMember ? true : false;
    }
  }

  const handleClick = (e) => {
    e.stopPropagation();
    if (selected) {
      dispatch(teamAction.remMemberToAct({ id: member.id, sl: activitySl }));
    } else {
      dispatch(teamAction.addMemberToAct({ member, sl: activitySl }));
    }
  };

  return (
    <li className="flex flex-row">
      <div
        className={classNames(
          selected ? "bg-green-300" : "",
          "select-none cursor-pointer flex flex-1 items-center p-4 hover:bg-gray-300 transition ease-in-out delay-150 overflow-hidden"
        )}
        onClick={handleClick}
      >
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <span className="block relative">
            <img
              alt="profil"
              src={member.image}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </span>
        </div>
        <div className="flex-1 pl-1 mr-16">
          <div className="font-medium">{member.designation}</div>
          <div className="text-gray-600 text-sm">{member.name}</div>
        </div>
        <div className="text-gray-600 text-xs">{`${member.about.slice(
          0,
          15
        )}...`}</div>
        <button className="w-24 text-right flex justify-end">
          <svg
            width="20"
            fill="currentColor"
            height="20"
            className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default AddModal;
