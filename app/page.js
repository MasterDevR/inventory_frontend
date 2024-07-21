"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import LoginForm from "@/components/ui/form/login/login-form";
import UseStore from "@/components/store/store";

// css
import classes from "@/public/style/login.module.css";
const Page = () => {
  const setIsLogin = UseStore((state) => state.setIsLogin);
  const setUserRole = UseStore((state) => state.setUserRole);
  const router = useRouter();

  useEffect(() => {
    try {
      const userRole = localStorage.getItem("key2");
      const isLogin = localStorage.getItem("key3");

      if (userRole && isLogin) {
        setIsLogin(true);
        setUserRole(userRole);
        router.push("/dashboard");
      }
    } catch (err) {
      console.log("Caught Error : ", err);
    }
  }, []);
  return (
    <div className={`${classes.bg_color}`}>
      <LoginForm />
    </div>
  );
};

export default Page;
