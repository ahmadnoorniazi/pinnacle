import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from './Components/Loader'
const Home = lazy(() => import("./Containers/Home"));
const CreateStory = lazy(() => import("./Containers/CreateAStory"));
const StoryDetails = lazy(() => import("./Containers/StoryDetail/Main"));
const ResourceCenter = lazy(() => import("./Containers/ResourceCenter"));
const CounsellorsCoaching = lazy(() => import("./Containers/CounselorsCoaching"));
const EveryoneJourney = lazy(() => import("./Containers/EveryoneJourney"))


const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-a-story" component={CreateStory} />
          <Route exact path="/story-details/:id" component={StoryDetails} />
          <Route exact path="/resource-center" component={ResourceCenter} />
          <Route exact path="/counselors-coaching" component={CounsellorsCoaching} />
          <Route exact path="/everyones-journey" component={EveryoneJourney}/>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
