import React, { useCallback, useEffect, useState } from 'react'

const API_KEY = "U95GX1GCVAJM3INL"

const StockList = () => {
	const [seconds, setSeconds] = useState(0);
	const [data, setData] = useState([]);
	const [totalCallCount, setTotalCallCount] = useState(0);
	const [apiCallCount, setApiCallCount] = useState(0);

	// fetch api
	const fetchDataFromAlphavantageAPI = useCallback(async (symbol) => {
		setTotalCallCount((prevTotalApiCalls) => (prevTotalApiCalls + 1));

		try {
			const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&apikey=" + API_KEY);
	
			if (!response.ok)
				throw new Error('Network response was not ok');
	
			const apiData = await response.json();
			setData(apiData);
			console.log(apiData);

			if (!apiData.Note)
				setApiCallCount((previousCount) => previousCount + 1);
			
		} catch (error) {
			console.error('Error fetching data: ', error);
		}
	}, [apiCallCount]);

	// loop
	useEffect(() => {
		const intervalId = setInterval(() => {
			fetchDataFromAlphavantageAPI("BABA");
		}, 500);

		return (() => {
			clearInterval(intervalId);
		});
	}, [fetchDataFromAlphavantageAPI]);

	useEffect(() => {
		const timerId = setInterval(() => {
			setSeconds((prev) => prev + 1);
		}, 1000)

		return (() => {
			clearInterval(timerId);
		});
	}, [])

	return (
		<div>
			<h1 className='display-2'>Stock List</h1>
			<p className='display-4'>Count: {apiCallCount}</p>
			<p className='display-4'>Total Call Count: {totalCallCount}</p>
			<p className='display-4'>Seconds: {seconds}</p>

		</div>
	)
}

export default StockList
