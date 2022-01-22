import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { teamAction } from "store/teamSlice";
import { aicteCategory } from "./data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CategoryTable = () => {
  const selectedCategory = useSelector((state) => state.team.category.sl);

  return (
    <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-2xl overflow-hidden">
          <table className="min-w-full leading-normal bg-white">
            <thead>
              <HeaderRow headers={aicteCategory.headers} />
            </thead>
            <tbody>
              {aicteCategory.data.map((item) => (
                <BodyRow
                  sl={item.sl}
                  points={item.points}
                  text={item.category}
                  key={item.sl}
                  selectedCategory={selectedCategory}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
  text,
  points,
  selectedCategory,
  setSelectedCategory,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const payload = {
      sl,
      category: text,
      points,
    };

    if (sl !== selectedCategory) {
      dispatch(teamAction.addCategory(payload));
      dispatch(teamAction.resetActivities());
    }
  };

  return (
    <tr
      className={classNames(
        sl === selectedCategory ? `text-purple-900 bg-purple-100` : "bg-white",
        `transition ease-in-out delay-150 cursor-pointer hover:bg-purple-200 hover:text-purple-900 font-medium hover:-translate-y-1 duration-250 border-b  border-gray-200`
      )}
      onClick={handleClick}
    >
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{sl}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{text}</p>
      </td>
      <td className="px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{points}</p>
      </td>
    </tr>
  );
};

export default CategoryTable;
