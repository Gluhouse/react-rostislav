import { Switch, Route, Redirect } from "react-router-dom";

import pageRoutes from "constants/pageRoutes";
import {
  Page404,
  PresentationPage,
  HomePage,
  ContactPage,
  PrivacyPage,
} from "pages";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={pageRoutes.PRESENTATION}>
        <PresentationPage />
      </Route>
      <Route exact path={pageRoutes.HOME}>
        <HomePage />
      </Route>
      <Route exact path={pageRoutes.PRIVACY_POLICY}>
        <PrivacyPage />
      </Route>
      <Route exact path={pageRoutes.CONTACT}>
        <ContactPage />
      </Route>
      <Redirect exact from="/" to={pageRoutes.NOT_FOUND} />
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default AppRouter;
