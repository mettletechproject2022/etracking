import React from "react";
var datatime = () => {
  var showdate = new Date();
  var displaytodaysdate =
    showdate.getDate() +
    "/" +
    showdate.getMonth() +
    "/" +
    showdate.getFullYear();
  return (
    <div>
      <input type="text" value={displaytodaysdate} readonly="true" />
    </div>
  );
};
export default datatime;
