import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Spinner } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { Info } from "../components/organism/Auth/Info";

export function Logout() {
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const [isLogout, setIsLogout] = useState(false);
  const [isForwardPage, setIsForwardPage] = useState(false);

  useEffect(() => {
    if (cookies["access-token"]) {
      removeCookie("access-token");
      setIsLogout(true);
    }
  }, [removeCookie, cookies]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsForwardPage(true);
    }, 10000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isLogout ? <Info page="Logout" url="/" /> : <Spinner />}{" "}
      {isForwardPage && <Navigate to={"/"} />}
    </>
  );
}
