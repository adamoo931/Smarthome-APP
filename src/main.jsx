import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth } from "./pages/Auth.jsx";
import { Login } from "./components/organism/Auth/Login.jsx";
import { Register } from "./components/organism/Auth/Register.jsx";
import { ForgetPassword } from "./components/organism/Auth/ForgetPassword.jsx";
import { ResetPassword } from "./components/organism/Auth/ResetPassword.jsx";
import { Homepage } from "./pages/Homepage.jsx";
import { MenuDevice } from "./components/organism/Home/MenuDevice.jsx";
import { RegisterDevice } from "./components/organism/Home/RegisterDevice.jsx";
import { MainPage } from "./components/organism/Home/MainPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Info } from "./components/organism/Auth/Info.jsx";
import { VerifyUser } from "./components/organism/Auth/VerifyUser.jsx";
import { Sensor } from "./components/organism/Home/Sensor.jsx";
import { Gate } from "./components/organism/Home/Gate.jsx";
import { Lock } from "./components/organism/Home/Lock.jsx";
import { Light } from "./components/organism/Home/Light.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Logout } from "./pages/Logout.jsx";
import { Profile } from "./components/organism/Home/Profile.jsx";
import { ChangePassword } from "./components/organism/Home/ChangePassword.jsx";
import { ContactUs } from "./components/organism/Home/ContactUs.jsx";
import { SetLimits } from "./components/organism/Home/SetLimits.jsx";
import { TurnOffAlert } from "./components/organism/Home/TurnOffAlert.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/info-register",
        element: <Info page="registerUser" url="/" />,
      },
      {
        path: "/info-logout",
        element: <Info page="Logout" url="/" />,
      },
      {
        path: "/info-forget-password",
        element: <Info page="forgetPassword" url="/" />,
      },
      {
        path: "/info-reset-password",
        element: <Info page="resetPassword" url="/" />,
      },
      {
        path: "/info-verify-user",
        element: <Info page="verifiedUser" url="/" />,
      },
      {
        path: "/verify-user",
        element: <VerifyUser />,
      },
    ],
  },
  {
    path: "/homepage",
    element: <Homepage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "register-device",
        element: <RegisterDevice />,
      },
      {
        path: "info-register-device",
        element: <Info page="registerDevice" url="/homepage" />,
      },
      {
        path: "menu-devices",
        element: <MenuDevice />,
      },
      {
        path: "sensor",
        element: <Sensor />,
      },
      {
        path: "gate",
        element: <Gate />,
      },
      {
        path: "lock",
        element: <Lock />,
      },
      {
        path: "light",
        element: <Light />,
      },
      {
        path : 'profile',
        element : <Profile/>,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "info-reset-password",
        element: <Info page="resetPassword" url="/homepage" />,
      },
      {
        path: "set-limits",
        element: <SetLimits />,
      },
      {
        path: "turn-off-alert",
        element: <TurnOffAlert />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
