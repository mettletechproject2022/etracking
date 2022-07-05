import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DateS = (props) => {
 
  const [date, setDate] = useState(new Date());

  const handleDateChange = (d) => {
    setDate(d);
    props.setStartDate(d);
  };


  return (
    <DatePicker
      selected={date}
      dateFormat="dd-MM-yyyy"
      onChange={handleDateChange}
    />
  );
};

export default DateS;
