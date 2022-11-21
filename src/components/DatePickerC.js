import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerC({handleChange, startDate}) {

	return (
		<DatePicker wrapperClassName="datePicker" selected={startDate} onChange={(date) => handleChange(date)} 
		dateFormat='dd/MM/yyyy' />
	);
}

export default DatePickerC;
