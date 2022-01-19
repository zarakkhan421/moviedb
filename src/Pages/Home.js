import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeMoviesSection from "../Components/HomeMoviesSection";

const HomeSection = styled.main`
	max-width: 1500px;
	margin: 5px auto;
`;

const Home = () => {
	useEffect(() => {});

	return (
		<HomeSection>
			<HomeMoviesSection
				sectionName={"Popular Movies"}
				url={
					"https://api.themoviedb.org/3/movie/popular?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
				}
			/>
			<HomeMoviesSection
				sectionName={"Trending Movies"}
				url={
					"https://api.themoviedb.org/3/trending/movie/day?api_key=d114dfa16205db06cd554385efbfa351"
				}
			/>
			<HomeMoviesSection
				sectionName={"Upcomming Movies"}
				url={
					"https://api.themoviedb.org/3/movie/upcoming?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
				}
			/>
			<HomeMoviesSection
				sectionName={"Top Rated Movies"}
				url={
					"https://api.themoviedb.org/3/movie/top_rated?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
				}
			/>
		</HomeSection>
	);
};

export default Home;
