import React from "react";
import { ReactComponent as FacebookIcon } from "assets/facebook-social-icon-gray.svg";
import { ReactComponent as TwitterIcon } from "assets/twitter-social-icon-gray.svg";
import { ReactComponent as InstagramIcon } from "assets/instagram-social-icon-gray.svg";

const MemberCard = ({
  image,
  name,
  designation,
  about,
  twitter,
  instagram,
  facebook,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
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
  );
};

export default MemberCard;
