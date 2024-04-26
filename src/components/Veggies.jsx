import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Wrapper, Card, Gradient } from "./Trending";
import { Link } from "react-router-dom";

function Veggies() {
	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		fetchVeggie();
	}, []);

	const fetchVeggie = async () => {
		const check = localStorage.getItem("veggie");
		if (check) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=10&tags=vegetarian`
			);
			const data = await api.json();
			localStorage.setItem("veggie", JSON.stringify(data.recipes));
			setVeggie(data.recipes);
			console.log(data.recipes);
		}
	};

	return (
		<Wrapper>
			<h3>Vegetarian Recipes</h3>
			<Splide
				options={{
					perPage: 5,
					gap: "3rem",
					arrows: false,
					pagination: false,
					drag: "free",
					wheel: true,
					speed: 1200,
				}}
			>
				{veggie.map((recipe) => {
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

export default Veggies;
