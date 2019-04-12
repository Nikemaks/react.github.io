import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter.js'

const App = () => {

	const todoData = [
		{ label: 'Drink Coffe', important: false, id: 1 },
		{ label: 'Make Awensome App', important: true, id: 2 },
		{ label: 'Have a lunch', important: false, id: 3 }
	];

	return (
		<div className = "todo-app">
			<AppHeader todo = {1} done = {3} />
			<div className = "top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter />
			</div>
			<TodoList todos = { todoData }/>
		</div>
	)
}

ReactDOM.render(<App/>, 
	document.getElementById('root'));
