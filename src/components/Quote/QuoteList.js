import React, { useEffect, useContext } from "react";
import axios from 'axios';

// IMPORT UTILITIES
import {axiosWithAuth} from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
import QuoteContext from "../../context/QuoteContext";

// IMPORT APP COMPONENTS
import QuoteCard from "./QuoteCard";

const QuotesList = () => {

	const { quote, setQuote, quotes, setQuotes } = useContext(QuoteContext);
	console.log("quote: ", quotes);

	useEffect(() => {
			axiosWithAuth()
				.get('https://quotes-db-mike.herokuapp.com/quotes/')
				.then(response => {
					console.log("response", response.data);
					setQuotes(response.data);
				})
				.catch(error => console.log('error', error));
		}, []);

	return (
		<section className="section section-quotes quotes-cards container is-grid">
			{quotes.map(item => {
					return <QuoteCard quote={item.quote} speaker={item.speaker} key={item.id} />
				})
			}
		</section>
	)
};

export default QuotesList;