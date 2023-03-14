import React from "react";
import { useQuery } from "react-query";
import { GoogleMap, Header } from "@components/";

type ConutryInfo = {
  latitude: string;
  longitude: string;
  country_kr: string;
  country_eng: string;
  capital: string;
  language: string;
};

const MainPage = () => {
  // const { data, isLoading, error } =
  // useQuery();
  // "countryInfo",
  // async (): Promise<ConutryInfo> => {
  //   const response = await fetch("http://localhost:8081");
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch country info");
  //   }
  //   const data = await response.json();
  //   return data;
  // }

  // if (isLoading) {
  //   return <>Loading...</>;
  // }

  // if (error) {
  //   return <>Error: {error}</>;
  // }

  // if (!data) {
  //   return null; // or any other fallback UI
  // }

  return (
    <>
      <Header name={""} />
      <div className="wrap">
        <div className="main_map">{/* <GoogleMap data={data} /> */}</div>
        <table className="countryInfo">
          <tbody>
            <tr>
              <td>나라</td>
              <td>{/* {data.country_kr} ({data.country_eng}) */}대한민국</td>
            </tr>
            <tr>
              <td>수도</td>
              <td>{/*data.capital*/} 서울</td>
            </tr>
            <tr>
              <td>언어</td>
              <td>{/*data.language*/}한국어</td>
            </tr>
          </tbody>
        </table>
        <div className="info mt_40">
          <div className="test1">지금 한국으로 여행가볼까요 ?</div>
          <div className="test">
            <figure
              onClick={(e) => {
                console.log("AAA", e);
              }}
            >
              <img src="/images/ntower.jpeg" />
              <figcaption>남산타워</figcaption>
            </figure>
            <figure>
              <img src="/images/hanokvil.jpeg" />
              <figcaption>북촌 한옥마을</figcaption>
            </figure>
            <figure>
              <img src="/images/royal_place.jpeg" />
              <figcaption>경복궁</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
