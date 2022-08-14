import { useState } from "react";
import { useRouter } from 'next/router';

import LogoImage from "../Components/Logo";
import Loader from "../Components/Loader";
import style from "./index.module.css";


function SplashPage() {
    
    const [theme,setTheme] = useState("dark");
    const router = useRouter();

    redirect(router)
  return (
    <div
    className={style.splashPage}>

      <LogoImage theme={theme}/>
      <Loader theme={theme}/>

    </div>
  );
}

function redirect(router) {
    setTimeout(() => {
        // TODO : check if already authenticated and redirect to home page

        //else redirect to login page
        router.replace('/authentication')

    },2000)
}

export default SplashPage;
