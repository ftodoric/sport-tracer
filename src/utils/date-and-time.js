export function getToday() {
  var date = new Date();
  var day = "0" + date.getDate();
  var month = "0" + (date.getMonth() + 1);
  var year = date.getFullYear();
  return `${year}-${month.substr(-2)}-${day.substr(-2)}`;
}
