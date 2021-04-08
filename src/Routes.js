import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Home = lazy(() => import('./Containers/Home'));


const Routes = () => {
	return (
		<Suspense fallback={<h1>Loading....</h1>}>
      <Router>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
      </Router>
		</Suspense>
	);
};

export default Routes;
