import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Sidebar from './layouts/sidebar';

import ListFlights from './components/list-flight';
import AddFlight from './components/add-flight';
import FindCarrier from './components/find-carrier';
import FindRoute from './components/find-route';
import FindPrice from './components/find-price';

function App() {

  return (

    <BrowserRouter>

      <div className="app-container">

        <Sidebar />

        <div className="main-content">

          <Routes>

            <Route
              path="/"
              element={<ListFlights />}
            />

            <Route
              path="/add"
              element={<AddFlight />}
            />

            <Route
              path="/carrier"
              element={<FindCarrier />}
            />

            <Route
              path="/route"
              element={<FindRoute />}
            />

            <Route
              path="/price"
              element={<FindPrice />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;