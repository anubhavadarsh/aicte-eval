import getDaySuffix from "./getDaySuffix";
import getMonth from "./getMonth";

/**
 * returns date in date month, year format
 * @param {Date} startDate pass a start time stamp
 */
const getDate = (startTimeStamp) => {
  const date = new Date(startTimeStamp);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}${getDaySuffix(day)} ${getMonth(month)}, ${year}`;
};

export default getDate;
