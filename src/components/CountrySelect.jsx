import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";

const CountrySelect = () => {
  // export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
  return (
    <div className="Country-Selector">
      <div className="flex gap-2 mb-4 justify-end">
        <label
          htmlFor="country"
          className="w-[40%] text-right text-[#323233] md:text-[30px]"
        >
          PAIS
        </label>
        <Select
          className="w-[60%]"
          options={Country.getAllCountries()}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedCountry}
          onChange={(item) => {
            setSelectedCountry(item);
          }}
        />
      </div>
      <div className="flex gap-2 mb-4 justify-end">
        <label
          htmlFor="country"
          className="w-[40%] text-right text-[#323233] md:text-[30px]"
        >
          ESTADO
        </label>
        <Select
          className="w-[60%]"
          options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedState}
          onChange={(item) => {
            setSelectedState(item);
          }}
        />
      </div>
      <div className="flex gap-2 mb-4 justify-end">
        <label
          htmlFor="country"
          className="w-[40%] text-right text-[#323233] md:text-[30px]"
        >
          CIUDAD
        </label>
        <Select
          className="w-[60%]"
          options={City.getCitiesOfState(
            selectedState?.countryCode,
            selectedState?.isoCode
          )}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedCity}
          onChange={(item) => {
            setSelectedCity(item);
          }}
        />
      </div>
    </div>
  );
};
export default CountrySelect;
