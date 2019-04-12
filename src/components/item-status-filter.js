import React from 'react';
import './item-status-filter.css'

const ItemStatusFilter = () => {
	return (
		<div>
			<button type= "button"
					className = "btn btn-info">All</button>
			<button type= "button"
					className = "btn btn-outline-seconary">Active</button>
			<button type= "button"
					className = "btn btn-outline-seconary">Done</button>					

		</div>
	)
}

export default ItemStatusFilter; 