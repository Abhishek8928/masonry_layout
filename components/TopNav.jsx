import { useSession , signIn , signOut } from "next-auth/react";
import React from "react";
import style from "../styles/home.module.css"


const TopNav = () => {
  const { data } = useSession();

  console.log(data)

  
  return (
    <div className="w-full flex justify-between  px-[2vw] py-[1vw]">
      <div className="font-bold text-[1.4vw]  text-[#1c1c1c]">
        Masonry Layout
      </div>
      <div className="  w-1/3  ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full p-4 bg-[#F1F1F1] rounded-full"
        />
      </div>
      <div className="flex items-center justify-end gap-[0.6vw]  overflow-hidden">
        {data ? (
          <>
            <div className="userInfo rounded-full size-[2vw] overflow-hidden">
              <img
                src={`${data.user.image}`}
                alt=""
              />
            </div>
            <div className="leading-none">
              <h2 className="text-sm font-bold text-[#111111]">{data?.user?.name}</h2>
              <small className="text-xs font-semibold text-[#1c1c1c]">
                {data?.user?.email}
              </small>
            </div>

            <button onClick={signOut} className={`${style["logout-btn"]}`}>Logout</button>
          </>
        ) :  <button onClick={signIn} className={`${style["logout-btn"]}`}>SignIn</button> }
      </div>
    </div>
  );
};

export default TopNav;
