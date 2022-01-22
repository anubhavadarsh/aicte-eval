import React from "react";
import { useSelector } from "react-redux";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import ActivityInfo from "components/ActivityInfo";

const ActivitiesDash = () => {
  const activities = useSelector((state) => state.team.activities.activities);

  return activities.length ? (
    <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="w-full p-2 mx-auto bg-white rounded-2xl">
        {activities.map((activity, index) => (
          <DisclosureItem
            classNames={index > 0 ? "mt-4" : ""}
            header={activity.activity}
            key={activity.sl}
          />
        ))}
      </div>
    </div>
  ) : null;
};

const DisclosureItem = ({ header, details, classNames }) => {
  return (
    <Disclosure as="div" className={classNames}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>{header}</span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <ActivityInfo />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ActivitiesDash;
