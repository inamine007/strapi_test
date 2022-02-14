/***
  日付を/区切りでフォーマット
***/
const formatDateToSlash = (date) => {
  let d = new Date(date);
  let year = d.getFullYear();
  let month = ('0' + (d.getMonth() + 1)).slice(-2);
  let day = ('0' + d.getDate()).slice(-2);
  let formatDate = year + '/' + month + '/' + day
  return formatDate;
}

/***
  日付を年月日でフォーマット
***/
const formatDateToString = (date) => {
  let d = new Date(date);
  let year = d.getFullYear();
  let month = ('0' + (d.getMonth() + 1)).slice(-2);
  let day = d.getDate();
  let formatDate = year + '年' + month + '月' + day + '日'
  return formatDate;
}

export default ({}, inject) => {
  inject('formatDateToSlash', formatDateToSlash);
  inject('formatDateToString', formatDateToString);
}