"use client"

import Select from "react-select";
import { Country, City } from "country-state-city";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  },
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  },
  label: string;
} | null;

const options = Country.getAllCountries().map(country => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode 
  },
  label: country.name
}))

export function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>();
  const [selectedCity, setSelectedCity] = useState<cityOption>();
  const router = useRouter();

  function handleSelectedCountry(option: option) {
    setSelectedCountry(option);
    setSelectedCity(null);
  }

  function handleSelectedCity(option: cityOption ) {
    setSelectedCity(option);
    router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
  }
   
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="flex items-center gap-1 text-white font-light">
          <Globe strokeWidth={1} size={20} />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>
      {selectedCountry && (
        <div className="space-y-4">
          <div className="flex items-center gap-1 text-white font-light">
            <Globe strokeWidth={1} size={20} />
            <label htmlFor="country">City</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
          />
        </div>
      )}
    </div>
  );
}