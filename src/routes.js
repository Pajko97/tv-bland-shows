import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Show from './views/Show/Show'
import Landing from './views/Landing/Landing'
import React from 'react'

const AppRoutes = () => {

	return (
		<React.Fragment>
			<Routes>
				<Route path="/" key="root" element={<Landing />} />
				<Route path="/shows" key="shows" element={<Home />} />
				<Route path="/shows/:id" key="show" element={<Show />} />
			</Routes>
		</React.Fragment>

	)
}


export default AppRoutes


