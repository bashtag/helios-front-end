import * as actionTypes from './actionTypes'

/**
 * Change the current market action
 * @param {market} market 
 * @returns 
 */
export function changeMarket(market) {
	return (
		{
			type: actionTypes.CHANGE_MARKET,
			payload: market
		}
	);
}

/**
 * Action to get markets
 * @param {Market[]} markets 
 * @returns 
 */
export function getMarketsFromURL(markets) {
	return (
		{
			type: actionTypes.GET_MARKETS_FROM_URL,
			payload: markets
		}
	)
}

// To get markets from API
export function getMarkets() {
	return (
		function (dispatch) {
			let	url = "http://localhost:3000/markets";
			return (fetch(url)
				.then(response => response.json())
				.then(data => dispatch(getMarketsFromURL(data))))
		}
	);
}