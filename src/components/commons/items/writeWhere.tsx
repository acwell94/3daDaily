"use client";

import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";

import { forwardRef, useMemo, useState } from "react";
import styled from "styled-components";
import WriteCtrButton from "../button/writeCtrButton";
import { WriteContainer, WriteTitle } from "../styles/commonStyles";
import LogoItem from "./logoItem";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
// import type { NextPage } from "next";

interface IWriteProps {
  prevHandler?: () => void;
  nextHandler?: () => void;
  handler: (e: string) => void;
}

const WritePickBox = styled.div`
  ${flexBox("col", "start", "center")}
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 1rem rgba(97, 100, 187, 0.3);
  border-radius: 8px;
  padding: 6rem 8rem;
  width: 98%;
  height: 100%;
  max-height: 60rem;
`;

const MapBox = styled.div`
  ${flexBox("row", "between", "center")}
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 6px;
  background-color: ${theme.colors.lightPurple};
`;

const SearchBox = styled.div`
  /* width: 30%; */
  flex: 1;
  height: 100%;
  margin-right: 2rem;
  ${flexBox("row")}
`;

const SearchInputBox = styled.div`
  flex: 1;
`;

const SearchInput = styled.input`
  display: flex;
  height: 10%;
  outline: none;
  border: none;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.6rem;
  border-radius: 6px;
  margin-bottom: 2rem;
  ::placeholder {
    padding-left: 0.2rem;
    color: ${theme.colors.blackGray};
  }
`;

const SearchedDataBox = styled.div`
  background-color: ${theme.colors.white};
  padding: 2rem 1rem;
  border-radius: 6px;
  height: calc(90% - 2rem);
`;

const SearchedData = styled.div`
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${theme.colors.darkGray};
  margin-bottom: 0.8rem;
  padding: 1.4rem 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.ashBlue};
  }
`;

const WriteWhere = (
  { prevHandler, nextHandler, handler }: IWriteProps,
  ref: any,
) => {
  const [lat, setLat] = useState(37.5666805);
  const [lng, setLng] = useState(126.9784147);
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      clickableIcons: false,
      streetViewControl: false,
    }),
    [],
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <WriteContainer ref={ref}>
      <LogoItem />
      <WriteTitle>어디에 있었나요?</WriteTitle>
      <WritePickBox>
        <MapBox>
          <SearchBox>
            <PlacesAutocomplete
              handler={handler}
              onAddressSelect={(address) => {
                getGeocode({ address: address }).then((results) => {
                  const { lat, lng } = getLatLng(results[0]);
                  setLat(lat);
                  setLng(lng);
                });
              }}
            />
          </SearchBox>
          <GoogleMap
            options={mapOptions}
            zoom={17}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{
              flex: 1.2,
              height: "100%",
              borderRadius: "8px",
              position: "relative",
            }}
            onLoad={() => console.log("Map Component Loaded...")}
          >
            <MarkerF
              position={mapCenter}
              onLoad={() => console.log("Marker Loaded")}
            />
          </GoogleMap>
        </MapBox>
      </WritePickBox>
      <WriteCtrButton
        leftTitle="이전"
        rightTitle="다음"
        leftHandler={prevHandler}
        rightHandler={nextHandler}
      />
    </WriteContainer>
  );
};

const PlacesAutocomplete = ({
  onAddressSelect,
  handler,
}: {
  onAddressSelect?: (address: string) => void;
  handler: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: "kr" } },
    debounce: 300,
    cache: 86400,
  });
  // console.log(value);
  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <SearchedData
          key={place_id}
          onClick={() => {
            setValue(description, false);
            onAddressSelect && onAddressSelect(description);
            handler(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </SearchedData>
      );
    });
  };

  return (
    <SearchInputBox>
      <SearchInput
        value={value}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="검색"
      />
      <SearchedDataBox>
        {status === "OK" && renderSuggestions()}
      </SearchedDataBox>
    </SearchInputBox>
  );
};

export default forwardRef(WriteWhere);
