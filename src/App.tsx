import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/UI/NavBar/Navbar";
import NavItem from "./components/UI/NavBar/NavItem";
import Gallery from "./components/Gallery/Gallery";

const SUBREDDITS = [
  { name: "Earth Pics", value: "earthporn" },
  { name: "Nature Pics", value: "natureporn" },
  { name: "Sky Pics", value: "skyporn" },
  { name: "Abandoned Pics", value: "abandonedporn" },
  { name: "Eye Bleach", value: "eyebleach" },
  { name: "Car Pics", value: "carporn" },
  { name: "Space Pics", value: "spaceporn" },
  { name: "Military Pics", value: "militaryporn" },
  { name: "Beer With A View", value: "beerwithaview" },
];

type Sub = {
  name: string;
  value: string;
};

function App() {
  const [shownSub, setShownSub] = useState<Sub>({
    name: "No Context Pics",
    value: "nocontextpics",
  });
  const [dropdownItems, setDropdownItems] = useState<Sub[]>(SUBREDDITS);

  const changeShownSub = (clickedSub: Sub) => {
    console.log(clickedSub);
    const newDropdownList = [
      shownSub,
      ...dropdownItems.filter((item) => item.value !== clickedSub.value),
    ];
    setDropdownItems(newDropdownList);
    setShownSub(clickedSub);
  };

  useEffect(() => {
    console.log("App mounted...");
  }, []);
  return (
    <div className="App">
      <Navbar>
        <NavItem name={shownSub.name}>
          <div className="Dropdown">
            {dropdownItems.map((dropdownItem) => (
              <h2
                key={dropdownItem.value}
                onClick={() => changeShownSub(dropdownItem)}
                className="DropdownItem"
              >
                {dropdownItem.name}
              </h2>
            ))}
          </div>
        </NavItem>
      </Navbar>
      <Gallery subreddit={shownSub.value}></Gallery>
    </div>
  );
}

export default App;
