import React, { Component } from "react";
import Img from "../../assets/america_shield.png";
import "../Loading/loading.scss";

function Loading() {
    return <img src={Img} alt={"loading"} className={"loading"} />;
}

export default Loading;
