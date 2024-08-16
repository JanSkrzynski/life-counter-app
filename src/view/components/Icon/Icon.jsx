import React from "react";
import AccountBalance from "./AccountBalance";
import Add from "./Add";
import AddBox from "./AddBox";
import AddCircle from "./AddCircle";
import ArrowBack from "./ArrowBack";
import ArrowForward from "./ArrowForward";
import Car from "./Car";
import Diversity1 from "./Diversity1";
import DoNotDisturbOn from "./DoNotDisturbOn";
import Share from "./Share";
import SportsSoccer from "./SportsSoccer";
import WineBar from "./WineBar";

/*

HOW TO USE ICON COMPONENT

1. Import the Icon component in the file where you want to use it.
2. Give the icon a 'name' prop with the name of the icon you want to use.
   The avaiable icon names are:
    - AccountBalance
    - Add
    - AddBox
    - AddCircle
    - ArrowBack
    - ArrowForward
    - Car
    - Diversity1
    - dnd
    - Share
    - SportsSoccer
    - WineBar

3. You can also give the icon a 'className' prop to style it.
4. Example:
    <Icon name="Car" className="icon" />

*/

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "accountbalance":
      return <AccountBalance {...props} />;
    case "add":
      return <Add {...props} />;
    case "addbox":
      return <AddBox {...props} />;
    case "addcircle":
      return <AddCircle {...props} />;
    case "arrowback":
      return <ArrowBack {...props} />;
    case "arrowforward":
      return <ArrowForward {...props} />;
    case "car":
      return <Car {...props} />;
    case "diversity1":
      return <Diversity1 {...props} />;
    case "dnd":
      return <DoNotDisturbOn {...props} />;
    case "share":
      return <Share {...props} />;
    case "sportssoccer":
      return <SportsSoccer {...props} />;
    case "winebar":
      return <WineBar {...props} />;
    default:
      return <div></div>;
  }
};

export default Icon;
