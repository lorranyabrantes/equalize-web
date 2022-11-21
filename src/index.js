import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';


import { createStore } from "redux";
import { Provider } from "react-redux";

import ErrorPage from './pages/Error';
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';

import reducers from './services/reducers'
import Form from './pages/Form';
import Login from './pages/Login';

const store = createStore(reducers);  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/form",
    element: <Form />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
