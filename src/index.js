import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import IncidentScreen from './screens/IncidentScreen';
import NotReadyScreen from './screens/NotReady';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Root = (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="/*" element={<NotReadyScreen />} />
          <Route path="/register/incident" element={<IncidentScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render(Root, document.getElementById('root'));
