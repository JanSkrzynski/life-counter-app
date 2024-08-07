import React from "react";
import AccountBalance from "./AccountBalance";
import Add from "./Add";
import AddBox from "./AddBox";
import AddCircle from "./AddCircle";
import ArrowBack from "./ArrowBack";
import ArrowForward from "./ArrowForward";
import Diversity1 from "./Diversity1";
import DoNotDisturbOn from "./DoNotDisturbOn";
import Share from "./Share";
import SportsSoccer from "./SportsSoccer";
import WineBar from "./WineBar";

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
    case "diversity1":
      return <Diversity1 {...props} />;
    case "donotdisturbon":
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
