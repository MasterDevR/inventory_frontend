"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../loader/Loader";

const Wrapper = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("adfasdfas");
    try {
      const userRole = localStorage.getItem("key2");
      const isLogin = localStorage.getItem("key3");
      if (!userRole && !isLogin) {
        router.push("/");
      }
      setIsLoading(false);
    } catch (err) {
      console.log("Caught Error : ", err);
    }
  }, []);
  return <div>{!isLoading ? children : <Loader />}</div>;
};

export default Wrapper;
