import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import DatePickerC from './components/DatePickerC';
function App() {

	const [startDate, setStartDate] = useState(new Date());
	const [filtered, setFiltered] = useState(false)
	const handleChange = (date) => {
		setStartDate(date)
		setFiltered(true)
	}

	return (
		<>
			<DatePickerC startDate={startDate} handleChange={handleChange} />
			<ProductCard filtered={filtered} startDate={startDate} />
		</>
	);
}

export default App;
