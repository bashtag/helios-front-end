import { CrosshairMode, createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react'

const Chart = props => {
	const {
		data,
		crossHair = CrosshairMode.Normal
	} = props;

	const chartContainerRef = useRef();

	useEffect(() => {
		// new chart instance
		const chart = createChart(chartContainerRef.current, {
			width: 800,
			height: 400
		});


		// add candlestick series
		const candleStickSeries = chart.addCandlestickSeries();

		candleStickSeries.setData(data);

		// apply crosshair
		chart.applyOptions({
			crosshair: {
				mode: crossHair
			}
		})

		return (() => {
			chart.remove();
		});
	}, [data]);

  return (
	<div ref={chartContainerRef}>
	</div>
  )
}

export default Chart
