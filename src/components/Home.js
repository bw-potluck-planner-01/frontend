import { Grow } from "@material-ui/core";
import React from "react";
import potluck2 from "../assets/potluck2.png";

function Home() {
  return (
    <div>
      <Grow in={true}>
        <img src={potluck2} width={"100%"} alt="picture of food" />
      </Grow>
    </div>
  );
}

export default Home;
