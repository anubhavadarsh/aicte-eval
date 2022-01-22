import React from "react";
import StatCard from "components/StatCard";
import Controls from "./Controls";
import getDate from "utils/getDate";

const ActivityInfo = ({
  sl,
  weeks,
  hours,
  points,
  startTimeStamp,
  members,
  completed,
}) => {
  return (
    <>
      <div className="mb-4 relative sm:flex items-center justify-around">
        <StatCard
          header={`${getDate(startTimeStamp)}`}
          content={"started on"}
        />
        <StatCard header={`${members.length}`} content={"members"} />
        <StatCard header={`${completed}%`} content={"completed"} />
      </div>
      <p className="pb-2 text-sm text-gray-500 mt-4 xl:ml-5 sm:ml-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat
        semper ipsum, ut rhoncus sem faucibus non. Nulla facilisi. Praesent nibh
        magna, imperdiet et facilisis eu, facilisis vel enim. Sed vestibulum dui
        consectetur lacus sollicitudin consectetur. Cras molestie mauris quam,
        id efficitur lacus scelerisque vitae. Morbi sollicitudin, turpis at
        scelerisque porta, risus elit facilisis quam, quis lobortis diam purus
        vitae enim. Pellentesque faucibus risus magna, vel congue tellus
        vulputate a. Proin semper feugiat enim a sagittis.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat
        semper ipsum, ut rhoncus sem faucibus non. Nulla facilisi. Praesent nibh
        magna, imperdiet et facilisis eu, facilisis vel enim. Sed vestibulum dui
        consectetur lacus sollicitudin consectetur. Cras molestie mauris quam,
        id efficitur lacus scelerisque vitae. Morbi sollicitudin, turpis at
        scelerisque porta, risus elit facilisis quam, quis lobortis diam purus
        vitae enim. Pellentesque faucibus risus magna, vel congue tellus
        vulputate a. Proin semper feugiat enim a sagittis. id efficitur lacus
        scelerisque vitae. Morbi sollicitudin, turpis at scelerisque porta,
        risus elit facilisis quam, quis lobortis diam purus vitae enim.
        Pellentesque faucibus risus magna, vel congue tellus vulputate a. Proin
        semper feugiat enim a sagittis.
      </p>
      <ImageGallery />
      <Controls sl={sl} selectedMembers={members} />
    </>
  );
};

const ImageGallery = () => {
  return (
    <section className="pt-8 px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="md:w-1/3 px-4 mb-8">
          <img
            className="rounded shadow-md"
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:w-1/3 px-4 mb-8">
          <img
            className="rounded shadow-md"
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:w-1/3 px-4 mb-8">
          <img
            className="rounded shadow-md"
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:w-1/3 px-4 mb-8">
          <img
            className="rounded shadow-md"
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:w-1/3 px-4 mb-8">
          <img
            className="rounded shadow-md"
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:w-1/3 px-4 mb-8">
          <img
            className="rounded shadow-md"
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ActivityInfo;
