import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from 'react-redux';
// import store from 'store';
import Homepage from "./pages/Homepage";
// import ErrorBoundary from './components/ErrorBoundary';
// import reducersStore from './reducers/store';

/**
 * App Component
 */
function App() {
  return (
    // <Provider store={reducersStore}>
    //    <ErrorBoundary>
    //     <Router>
    //       <Homepage />
    //     </Router>
    //   </ErrorBoundary>
    // </Provider>
    <Homepage />
  );
}

export default App;
