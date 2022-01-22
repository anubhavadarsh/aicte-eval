import { Alert } from "components/UI/Alert";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { teamAction } from "store/teamSlice";
import { aictePointProgramme } from "./data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProgrammeTable = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    color: "",
  });

  return (
    <>
      <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-2xl overflow-hidden">
              <table className="min-w-full leading-normal bg-white">
                <thead>
                  <HeaderRow headers={aictePointProgramme.headers} />
                </thead>
                <tbody>
                  {aictePointProgramme.data.map((item) => (
                    <BodyRow
                      sl={item.sl}
                      activityHead={item.activityHead}
                      weeks={item.weeks}
                      hours={item.hours}
                      evaluated={item.evaluated}
                      points={item.points}
                      key={item.sl}
                      setShowAlert={setShowAlert}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showAlert.show && (
        <Alert
          color={showAlert.color}
          message={showAlert.message}
          setShowAlert={setShowAlert}
          showAlert={showAlert}
        />
      )}
    </>
  );
};

const HeaderRow = ({ headers }) => {
  const Head = ({ text }) => (
    <th
      scope="col"
      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
    >
      {text}
    </th>
  );

  return (
    <tr>
      {headers.map((item) => (
        <Head text={item} key={item} />
      ))}
    </tr>
  );
};

const BodyRow = ({
  sl,
  activityHead,
  weeks,
  hours,
  points,
  evaluated,
  setShowAlert,
}) => {
  const dispatch = useDispatch();
  const { category, activities } = useSelector((state) => state.team);

  const selected = activities.activities.find((activity) => activity.sl === sl);

  const handleClick = () => {
    if (category.sl) {
      if (selected?.sl) {
        dispatch(teamAction.removeActivity({ sl, weeks, points }));
        setShowAlert({
          show: true,
          message: "Removed activity successfully",
          color: "bg-red-500",
        });
      } else {
        if (activities.totalPoints - 10 > category.points) {
          setShowAlert({
            show: true,
            message:
              "Liked your spirit but please de-select one activity to continue!",
            color: "bg-slate-500",
          });
        } else {
          const startTimeStamp = Date.now();

          const payload = {
            sl,
            weeks,
            hours,
            points,
            startTimeStamp,
            activity: activityHead,
          };
          dispatch(teamAction.addActivity(payload));
          setShowAlert({
            show: true,
            message: "Activity added successfully",
            color: "bg-green-500",
          });
        }
      }

      return;
    }
    setShowAlert({
      show: true,
      message: "Please select student category to continue!",
      color: "bg-blue-500",
    });
  };

  return (
    <tr
      className={classNames(
        sl === selected?.sl ? `text-purple-900 bg-purple-100` : "bg-white",
        `transition font-medium ease-in-out delay-150 cursor-pointer hover:bg-purple-200 hover:text-purple-900 hover:-translate-y-1 duration-300 border-b  border-gray-200`
      )}
      onClick={handleClick}
    >
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{sl}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{activityHead}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{weeks}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{hours}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{points}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{evaluated}</p>
      </td>
    </tr>
  );
};

export default ProgrammeTable;
