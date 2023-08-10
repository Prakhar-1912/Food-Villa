import React from "react";
import {lazy,suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import About from "./src/components/About";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import {store} from "./src/utils/store";
import Cart from "./src/components/Cart";


// import Instamart from "./components/Instamart";
//lazy and suspense is used which is imported from react library

//lazy loading,dynamic import,chunking,on demand loading 
const Instamart = lazy(()=> import("./src/components/Instamart"))

const AppLayout = () => {
 return(
    <>
    <Provider store={store} >
    <Header />
    <Outlet />
    <Footer />
    </Provider>
    </>
 );
};

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout/>,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/Contact",
            element: <Contact />,
         },
         {
            path: "/restaurant/:resId",
            element: <RestaurantMenu/>,
         },
         {
            path: "/instamart",
            element: <suspense><Instamart/></suspense>,
         },
         {
            path: "/cart",
            element: <Cart />,
         },
      ],
   }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);