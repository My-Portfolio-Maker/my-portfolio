import moment from "moment";
import { UID } from "../configs/AppConfig";

const handleDownload = (url, name, type) => {
  const download = `${url}/${name}/download?uid=${UID}&type=${type}`;
  return download;
};

const handleImage = (url, name, type) => {
  const view = `${url}/${name}/view?uid=${UID}&type=${type}`;
  return view;
};

const handleDate = (date) => {
  if (date) return moment(date).format("MMMM  YYYY");
  return "Present";
};

const getYear = (date) => {
  if (date) return moment(date).format("YYYY");
  return null;
};

const getMonth = (date) => {
  if (date) return moment(date).format("MMMM");
  return null;
};

const getPhoneNumber = (phone) => {
  if (phone) {
    let countryCode = "+" + phone.toString().slice(0, -10);
    let newNum = phone.toString().slice(-10);
    let format =
      newNum.substr(0, 4) +
      "-" +
      newNum.substr(4, 3) +
      "-" +
      newNum.substr(7, 3);
    let formattedPhoneNum = "(" + countryCode + ")" + " " + format;
    return formattedPhoneNum;
  }
  return ''
};

export {
  handleDownload,
  handleImage,
  handleDate,
  getYear,
  getMonth,
  getPhoneNumber,
};
