import React, { useEffect, useContext } from "react";

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
import QuoteContext from "../../context/QuoteContext";

// IMPORT APP COMPONENTS
import QuoteCard from "./QuoteCard";

const QuoteList = () => {

	const { quotes, setQuotes } = useContext(QuoteContext);
	console.log("Quotes: ", quotes);

	useEffect(() => {
			axiosWithAuth()
				.get('/quotes/')
				.then(response => {
					console.log("Response: ", response.data);
					setQuotes(response.data);
				})
				.catch(error => console.log('Error: ', error));
		}, []);

	const quotesMap = quotes.reverse();

	return (
		<section className="section section-quotes quotes-cards container is-grid">
			{quotesMap.map(item => {
					return <QuoteCard {...item} key={item.id} />
				})
			}
		</section>
	)
};

export default QuoteList;