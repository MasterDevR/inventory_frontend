"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../loader/Loader";
import axios from "axios";

const Wrapper = ({ children }) => {
  const url = process.env.NEXT_PUBLIC_URL;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const token = localStorage.getItem("key1");
        const response = await axios.post(`${url}/verify-token`, { token });
        if (response.data.status === 400 || response.data.status === 401) {
          localStorage.clear();
          router.push("/");
          return;
        }
        setIsLoading(false);
      } catch (err) {
        localStorage.clear();
        router.push("/");
      }
    };
    checkUser();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <div>{children}</div>;
};

export default Wrapper;
