import countries from "../data/countries";
import styles from "../styles/components/SelectCountry.module.css";
import axios from "axios";

export default function SelectCountry({ setCountry, setCountryData, defaultData }) {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        onChange={async (e) => {
          setCountry(e.target.value);
          if(e.target.value.toLowerCase() == "global") return setCountryData(defaultData);
          const apiUrl = `https://covid19.mathdro.id/api/countries/${e.target.value}`;
          const countryData = await axios.get(apiUrl);
          setCountryData(countryData.data);
        }}
      >
        <option value={"global"}>Global</option>
        {countries.map((el) => (
          <option key={el.ios3} value={el.name}>{el.name}</option>
        ))}
      </select>
    </div>
  );
}
