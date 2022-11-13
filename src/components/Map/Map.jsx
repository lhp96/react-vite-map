import React from "react";
import s from "./style.module.css";
import { useEffect } from "react";

const Map = ({ mapList }) => {
  useEffect(() => {
    console.log("mapList", mapList);
  }, []);
  return (
    <>
      <div>2222</div>
    </>
  );
};

export default Map;
