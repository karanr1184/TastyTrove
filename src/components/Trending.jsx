import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Trending() {
	const [trending, setTrending] = useState([]);

	useEffect(() => {
		fetchTrending();
	}, []);

	const fetchTrending = async () => {
		const check = localStorage.getItem("trending");
		if (check) {
			setTrending(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=8`
			);
			const data = await api.json();
			localStorage.setItem("trending", JSON.stringify(data.recipes));
			setTrending(data.recipes);
			console.log(data.recipes);
		}
	};

	return (
		<Wrapper>
			<h3>Trending Recipes</h3>
			<Splide
				options={{
					perPage: 4,
					gap: "3rem",
					arrows: false,
					pagination: false,
					drag: "free",
					wheel: true,
					speed: 1200,
				}}
			>
				{trending.map((recipe) => {
					return (
						<SplideSlide key={recipe.id}>
							<Card>
								<Link to={"/recipe/" + recipe.id}>
									<p>{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
									<Gradient />
								</Link>
							</Card>
						</SplideSlide>
					);
				})}
			</Splide>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const Card = styled.div`
	min-height: 15rem;
	border-radius: 2rem;
	overflow-x: scroll;
	position: relative;

	img {
		width: 20rem;
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Trending;
export { Wrapper, Card, Gradient };
