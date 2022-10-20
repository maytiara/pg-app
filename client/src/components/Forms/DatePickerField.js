import React, { useState } from "react";

import moment from "moment";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { TextField } from "@mui/material";

function DatePickerField() {
	// Date Picker
	const [selectedDate, setSelectedDate] = useState(
		moment().format("DD-MM-YYYY")
	);

	const handleDateChange = (date) => {
		console.log(date);
		setSelectedDate(date);
	};
	return (
		<div>
			{/* Date Picker */}
			<LocalizationProvider
				dateAdapter={AdapterDayjs}
				fullwidth
				sx={{ display: "flex", alignItems: "center", justifyContent: "center",
				direction: "column" }}
			>
				<DatePicker
					label="Select the date"
					name="eventDate"
					id="eventDate"
					views={["year", "month", "day"]}
					format={(date) => moment(date).toString("dddd, MMMM Do YYYY")}
					value={selectedDate}
					onChange={handleDateChange}
					renderInput={(params) => <TextField {...params} helperText="dd/mm/yyyy" />}
				/>
			</LocalizationProvider>
		</div>
	);
}

export default DatePickerField;
