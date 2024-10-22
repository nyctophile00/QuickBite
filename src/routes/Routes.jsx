import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../pages/Home.jsx'
import Restaurants from '../pages/Restaurants';
import Foods from '../pages/Foods.jsx';
import Grocery from '../pages/Grocery.jsx';
import AboutUs from '../components/AboutUs.jsx';
import ContactForm from '../components/Contact.jsx';

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/restaurants",
                element:<Restaurants/>
            },
            {
                path:"/foods",
                element:<Foods/>
            },
            {
                path:"/groceries",
                element:<Grocery/>
            },
            {
                path:"/aboutus",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<ContactForm/>
            },

        ]
    },
 ]);

  export default routes