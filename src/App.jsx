import Product from "./pages/Product";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pay from "./components/Pay";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;