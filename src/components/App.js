import React from "react";

// Importamos el BrowserRouter
// Switch renderiza una sola ruta, la primera que coincida con esa direccion
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewBadge from "../pages/NewBadge";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Layout from "./Layout";

// Aqui es donde vamos a configurar el BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={NewBadge} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
