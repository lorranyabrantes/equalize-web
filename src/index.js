import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import ErrorPage from './pages/Error';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Home from './pages/Home';

import reducers from './services/reducers'

const store = createStore(reducers);  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
