import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import SelectCountry from "../components/SelectCountry";
import CardContainer from "../styles/components/CardContainer.module.css";
import CountryTitle from "../styles/components/CountryTitle.module.css";
import axios from "axios";

export default function Home({defaultData}) {
  const [getCountry, setCountry] = useState("Global");
  const [getCountryData, setCountryData] = useState(defaultData);
  
  
  return (
    <div>
      <label style={{
        textAlign: "center",
        display: "block",
        fontSize: "1.25em",
        margin: "10px 0"
      }}>Select Country: </label>
      <SelectCountry defaultData={defaultData} setCountryData={setCountryData} setCountry={setCountry}/>
      <div className={CountryTitle.title}>{(getCountry.toLowerCase() == "global") ? "Global Cases" : `${getCountry} Country Cases`}</div>
      <div className={CardContainer.container}>
        <Card title={"Death"} color={"#fa515f"} value={getCountryData.deaths.value} />
        <Card title={"Confirmed"} color={"#ffef00"} value={getCountryData.confirmed.value} />
        <Card title={"Recovered"} color={"#00ff26"} value={getCountryData.confirmed.value - getCountryData.deaths.value} />
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx){
  const defaultData = await axios.get("https://covid19.mathdro.id/api/");
  return {
    props: {
      defaultData: defaultData.data
    }
  };
}