import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NFTs from "./components/NFTs";
import CollectionsInfo from "./components/CollectionsInfo";
import NftInfo from "./components/NftInfo";
import Error404 from "./components/Error404";
import ContactClass from "./components/ContactClass";
import Saved from "./components/Saved";
import Loading from "./components/Loading";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));

const About = lazy(() => import("./components/About"));
const Collections = lazy(() => import("./components/Collections"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <NFTs />,
        errorElement: <Error404 />,
      },
      {
        path: "/collections",
        element: (
          <Suspense fallback={<Loading />}>
            <Collections />
          </Suspense>
        ),
        errorElement: <Error404 />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
        errorElement: <Error404 />,
      },
      {
        path: "/contact",
        element: (
          <ContactClass
            phone={"+91 822488 78954"}
            mail={"contact@nftsgallery.in"}
          />
        ),
        errorElement: <Error404 />,
      },
      {
        path: "/saved",
        element: <Saved />,
        errorElement: <Error404 />,
      },
      {
        path: "/profile/:name",
        element: <Profile />,
        errorElement: <Error404 />,
      },
    ],
  },
  {
    path: "/nfts/:_id",
    element: <NftInfo />,
    errorElement: <Error404 />,
  },
  {
    path: "/collections/:id",
    element: <CollectionsInfo />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error404 />,
  },
]);

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/** //TODO Doubts
 *  - Price Low To High Sorting
    - Collections fetch controller ===> Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client 
 */
