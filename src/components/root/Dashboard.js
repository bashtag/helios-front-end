import React from 'react'
import { Col, Row } from 'reactstrap'
import MarketList from '../markets/MarketList'
import StockList from '../stocks/StockList'

const Dashboard = () => {
	return (
		<div>
			<Row>
				<Col xs="3">
					<MarketList />
				</Col>
				<Col xs="9">
					<StockList />
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard
