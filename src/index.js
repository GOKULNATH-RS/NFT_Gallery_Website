import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NFTDetails from './components/NFTDetails';
import CollectionsDetails from './components/CollectionsDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<NFTDetails />
      },
      {
        path:"/nfts",
        element:<NFTDetails />
      },
      {
        path:"/collections",
        element:<CollectionsDetails />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
    ]
  },
  
])

root.render(
  <RouterProvider router={appRouter}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
