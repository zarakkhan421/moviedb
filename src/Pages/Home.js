import React, { useEffect } from "react";
import styled from "styled-components";
import HomeMoviesSection from "../Components/HomeMoviesSection";

const HomeSection = styled.main`
	max-width: ${({ theme }) => theme.width.maxWidth};
	margin: 5px auto;
`;

const Home = () => {
	useEffect(() => {});

	return (
		<HomeSection>
			<HomeMoviesSection
				sectionName={"Popular Movies"}
				link="popular-movies"
				url={
					"https://api.themoviedb.org/3/movie/popular?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
				}
			/>
			<HomeMoviesSection
				sectionName={"Trending Movies"}
				link="trending-movies"
				url={
					"https://api.themoviedb.org/3/trending/movie/day?api_key=d114dfa16205db06cd554385efbfa351"
				}
			/>
			<HomeMoviesSection
				sectionName={"Upcomming Movies"}
				link="upcomming-movies"
				url={
					"https://api.themoviedb.org/3/movie/upcoming?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
				}
			/>
			<HomeMoviesSection
				sectionName={"TopRated Movies"}
				link="toprated-movies"
				url={
					"https://api.themoviedb.org/3/movie/top_rated?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
				}
			/>
		</HomeSection>
	);
};

export default Home;
