import { useEffect, useState } from "react";
import "./App.css";
import "./styles/mediaquery.css";

import Aside from "./components/Aside";
import Main from "./components/Main";
import goToImg from "./assets/images/download.png";
const social = [
  {
    id: 1,
    icon: "fa-brands fa-linkedin",
    name: "linkedin",
    url: "https://www.linkedin.com/in/amr-salah-b84978268/",
    title: "go to my linkedin",
  },
  {
    id: 2,
    icon: "fa-solid fa-envelope",
    name: "gmail",
    url: "mailto:amrsalah.dev@gmail.com",
    title: "mail me",
  },
  {
    id: 3,
    icon: "fa-brands fa-github",
    name: "github",
    url: "https://github.com/amrsalah-dev",
    title: "go to my github",
  },

  {
    id: 4,
    icon: "fa-brands fa-whatsapp",
    name: "whatsapp",
    url: "https://wa.me/+201016144057",
    title: "go to my whatsapp",
  },
  {
    id: 5,
    icon: "fa-brands fa-telegram",
    name: "telegram",
    url: "https://t.me/AmrSalahDev",
    title: "go to my telegram",
  },
];

function App() {
  // const handleRightClick = (e) => {
  //   console.log("right click!");
  //   e.preventDefault();
  // };
  let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
  let isDarkMode = mediaQueryObj.matches;
  const [isFlex, setIsFlex] = useState(true);
  const [isDark, setTheme] = useState(() => {
    const storedValue = localStorage.getItem("isdarklocal");
    return storedValue;
  });

  const [isScroll, setIsScroll] = useState(false);

  console.log(isDarkMode);
  // if (isDarkMode) {
  //   setTheme("light");
  // } else {
  //   setTheme("dark");
  // }
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    localStorage.setItem("isdarklocal", isDark);
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const setFlex = () => {
    setIsFlex(!isFlex);
  };
  window.onscroll = function () {
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
      ? setIsScroll(true)
      : setIsScroll(false);
  };
  return (
    <div
      className={`app ${isDark} ${isFlex ? "flex" : ""}`}
      id="app"
      // onContextMenu={handleRightClick}
    >
      <button
        className={`${isScroll ? "active" : ""}`}
        onClick={goToTop}
        title="go to top"
      >
        <img src={goToImg} alt="" />
      </button>
      {/* <button onClick={() => setLanguage("arabic")}>Lang</button> */}
      <Aside
        // handleRightClick={handleRightClick}
        isFlex={isFlex}
        social={social}
        handleChangeTheme={handleChangeTheme}
        isDark={isDark}
        setFlex={setFlex}
      />
      <Main />
    </div>
  );
}

export default App;
