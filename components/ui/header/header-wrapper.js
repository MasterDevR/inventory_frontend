"use client";
import React from "react";
import useStore from "@/components/store/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
const HeaderWrapper = () => {
  const url = process.env.NEXT_PUBLIC_URL;

  const { showSidebar, toggleSidebar, setUserRole, removeLogin } = useStore();
  const router = useRouter();
  const logoutHandler = async () => {
    const token = localStorage.getItem("key1");
    try {
      // console.log(token);
      // // const response = await axios
      // //   .post(`${url}/logout`, token)
      // //   .then((res) => {
      // //     return res.data;
      // //   })
      // //   .catch((err) => {
      // //     return err;
      // //   });
      console.log("first");
      localStorage.clear();
      setUserRole(null);
      removeLogin(false);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header
      className={`${showSidebar ? "absolute right-0" : "sticky"} top-0 w-full lg:sticky`}
    >
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div
            className="cursor-pointer rounded-sm p-3 hover:bg-slate-200"
            onClick={toggleSidebar}
          >
            {showSidebar ? (
              <RxCross2 size={"1.5rem"} />
            ) : (
              <GiHamburgerMenu size={"1.5rem"} />
            )}
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src={`https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/312638751_1802131140146177_1788834582181893883_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=_xqPmNpfNIAQ7kNvgFFPT9r&_nc_ht=scontent-mnl1-1.xx&oh=00_AYBe6Grs3TuhuYTeMDSuBaTBNnVERH0ymPuqP9b_wCFsfg&oe=669D8557`}
                  width="0"
                  height="0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWrapper;
