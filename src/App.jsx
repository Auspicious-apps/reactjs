import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Gallery from "./pages/Gallery";
import Distrubudors from "./pages/Distrubudors";
import { ToastProvider } from "tw-noti";

import { initMercadoPago } from "@mercadopago/sdk-react";
import FaqPage from "./pages/FaqPage";

initMercadoPago("APP_USR-12a306e8-0617-4bf8-8325-b7e08cf77763");

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },

  {
    path: "/distributors",
    element: <Distrubudors />,
  },
  {
    path: "/faq",
    element: <FaqPage />
  }
]);

const App = () => {
  return (
    <ToastProvider
      maxToasts={3}
      timeout={3000}
      reverseStackOrder
      containerClasses="right-12 bottom-12"
    >
      <RouterProvider router={router}></RouterProvider>
    </ToastProvider>
  );
};

export default App;
