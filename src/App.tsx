import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';
import style from './App.module.css'
import './assets/css/root.css'

function App(props: any) {
	
	return (
		<div>
			<BrowserRouter>
				<div>
					<div className={style.header}>
						<h1>TV Bland</h1>
					</div>
					<AppRoutes/>
				</div>
			</BrowserRouter>
		</div>

	);
}

export default App;
