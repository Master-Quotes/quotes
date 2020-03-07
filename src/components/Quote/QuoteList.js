import React, { useEffect, useContext } from "react";
import axios from 'axios';

// IMPORT APP COMPONENTS
import QuoteCard from "./QuoteCard";

// IMPORT CONTEXTS
import QuoteContext from "../../context/QuoteContext";

const QuotesList = () => {

	const { quote, setQuote } = useContext(QuoteContext);

	useEffect(() => {
			axios
				.get('https://quotes-db-mike.herokuapp.com/quotes/')
				.then(response => {
					setQuote(response.quote);
					console.log("response", response.quote);
				})
				.catch(error => console.log('error', error));
		}, []);

	return (
		<section className="cards-quotes">
			"(Quotes go here)"
			{quote.map(quotes => {
					return <QuoteCard quotes={quotes} key={quotes.id} />
				})
			}
		</section>
	)
};

export default QuotesList;