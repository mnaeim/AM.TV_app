import React from "react";
import Top from "../component/Top";
import requests from "../store/requests";
import "../../styles/Home.css";
import Row from "../component/Row";
import Nav from "../component/Nav";
import AMTV1 from "./AMTV1.png";

export const Home = () => {
  return (
    <div className="text-center mt-0 app">
      <Nav />
      <Top />
      <img className="main-logo" src={AMTV1} alt="main-logo" />

      <Row
        className="title"
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row
        className="title"
        title="AM-TV ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        className="title"
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row
        className="title"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        className="title"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        className="title"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        className="title"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        className="title"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
};
