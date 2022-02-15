import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';
import style from './App.module.css'
import './assets/css/root.css'
import 'font-awesome/css/font-awesome.min.css';
import { useTranslation } from 'react-i18next';

function App(props: any) {
	const { t } = useTranslation('common');
	return (
		<div>
			<BrowserRouter>
				<div>
					<div className={style.header}>
						<h1>{t('brand')}</h1>
					</div>
					<AppRoutes/>
				</div>
			</BrowserRouter>
		</div>

	);
}

export default App;
