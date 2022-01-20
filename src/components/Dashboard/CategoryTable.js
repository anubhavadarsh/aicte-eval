import React from "react";
import { aicteCategory } from "./data";

const CategoryTable = () => {
  return (
    <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="py-4">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
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
                  />
                ))}
              </tbody>
            </table>
          </div>
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

const BodyRow = ({ sl, text, points }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{sl}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{text}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{points}</p>
      </td>
    </tr>
  );
};

export default CategoryTable;
