import { sagaMiddleware, store } from "./bootstrap/store";
import { Provider } from "react-redux";
import combineSagas from "./redux/combineSagas";
import Router from "./router";

sagaMiddleware.run(combineSagas);

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
