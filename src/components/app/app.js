import React, {Component} from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'

export default class App extends Component{

	maxId = 100;

	state = {
		 todoData: [
				{ label: 'Drink Coffe', important: false, id: 1 },
				{ label: 'Make Awensome App', important: true, id: 2 },
				{ label: 'Have a lunch', important: false, id: 3 }
			]
	};

	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const index = todoData.findIndex((el) => el.id === id);
			const newArray = [
				...todoData.slice(0, index), 
				...todoData.slice(index+1)
			];
			return {
				todoData: newArray
			}
		})
	}
	addItem = (text) => {
		const newItem = {
			label: text,
			importnat: false,
			id: this.maxId++
		}
		this.setState(({todoData}) => {
			const newArray = [...todoData, newItem];

			return {
				todoData: newArray
			}
		});
		
	}

	onToggleImportant = (id) => {
		console.log('Toggle Important', id);
	}

	onToggleDone = (id) => {
		console.log('Toggle Done', id);
			
	}

	render(){
		return (
			<div className = "todo-app">
				<AppHeader todo = {1} done = {3} />
				<div className = "top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList 
						todos = { this.state.todoData }
				 		onDeleted = { this.deleteItem } 
				 		onToggleImportant = { this.onToggleImportant }
				 		onToggleDone = { this.onToggleDone } />
				<ItemAddForm onItemAdded = {this.addItem} /> 		
			</div>
		)
	}
}