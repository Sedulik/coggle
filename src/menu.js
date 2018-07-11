import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import Features from "./pages/features/Features";

export default [
  {
    name: "Home",
    link: "/",
    component: Home
  },
  {
    name: "Login",
    link: "/login",
    component: Login
  },
  {
    name: "Pricing",
    link: "/#pricing"
  },
  {
    name: "Features",
    link: "#features",
    component: Features
  },
  {
    name: "Gallery",
    link: "/gallery",
    component: Gallery
  }
];
