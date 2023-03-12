import React from "react";
import { useQuery } from "react-query";
import { GoogleMap } from "@components/";

type ConutryInfo = {
  latitude: string;
  longitude: string;
  country_kr: string;
};

const MainPage = () => {
  const { data, isLoading, error } = useQuery('countryInfo', async (): Promise<ConutryInfo> => {
    const response = await fetch('http://localhost:8081');
    if (!response.ok) {
      throw new Error('Failed to fetch country info');
    }
    const data = await response.json();
    return data;
  });


  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error: {error}</>;
  }

  if (!data) {
    return null; // or any other fallback UI
  }

  return (
    <>
      <GoogleMap data={data} />
      <table border={1}>
        <tbody>
          <tr>
            <td>{data.country_kr}</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MainPage;
