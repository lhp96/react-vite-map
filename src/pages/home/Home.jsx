import React, { useState, useEffect } from "react";
import s from "./style.module.css";
import Map from "../../components/Map/Map";
import { getCovidDataList } from "../../api/getCovid19Data";
import { getMapDataUtil } from "../../utils/index";

const Home = () => {
  const [mapList, setMapList] = useState([]);
  const fetchData = async () => {
    const { data: resData } = await getCovidDataList();
    const list = getMapDataUtil(resData);
    list.push({ res: 333 });
    setMapList(list);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>333</div>
      {mapList.length ? <Map mapList={mapList} /> : null}
    </>
  );
};
export default Home;
