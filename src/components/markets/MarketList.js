import React, { useCallback, useEffect } from 'react'
import { changeMarket } from '../../redux/actions/marketActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';
import { getMarkets } from '../../redux/actions/marketActions';

const MarketList = (
	{
		currentMarket,
		markets,
		actions
	}
) => {
	// did mount
	useEffect(() => {
		actions.getMarkets();
	}, [])

	// when select a category
	const selectMarket = useCallback(
		(market) => {
			actions.changeMarket(market);
		},
		[actions]
	);

	return (
		<div>
			<h3><Badge className='text-black' color="warning">Market List</Badge></h3>
			<ListGroup>
				{
					markets.map(market => (
						<ListGroupItem
							active={market.id === currentMarket.id}
							onClick={() => selectMarket(market)}
							key={market.id}>
							{market.marketName}
						</ListGroupItem>
					))
				}
			</ListGroup>

		</div>
	)
}

function mapStateToProps(state) {
	return (
		{
			currentMarket: state.changeMarketReducer,
			markets: state.marketListReducer
		}
	);
}

function mapDispatchToProps(dispatch) {
	return (
		{
			actions: {
				getMarkets: bindActionCreators(getMarkets, dispatch),
				changeMarket: bindActionCreators(changeMarket, dispatch)
			}
		}
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketList);
