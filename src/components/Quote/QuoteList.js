import React, { useEffect, useContext } from "react";
import Pusher from "pusher-js"

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
import QuoteContext from "../../context/QuoteContext";

// IMPORT APP COMPONENTS
import QuoteCard from "./QuoteCard";

const QuoteList = () => {

	const { quotes, setQuotes } = useContext(QuoteContext);
	console.log("Quotes: ", quotes);

	const getQuotes = _ => {
		axiosWithAuth()
			.get('/quotes/')
			.then(response => {
				console.log("Response: ", response.data);
				setQuotes(response.data);
			})
			.catch(error => console.log("That's an error! " ,error))
	};

	useEffect(() => {

		getQuotes();

		const pusher = new Pusher('326bd157958340453bb2', {
			cluster: 'us2',
			forceTLS: true
		});

		const channel = pusher.subscribe('quotes');
		channel.bind('new-quote-data', function(data) {
			getQuotes();
		});

		}, []);

	const quotesMap = quotes.reverse();

	return (
		<section className="section section-quotes quotes-cards container is-grid">
			{quotes.sort((a,b) => b.id-a.id ).map(item => {
					return <QuoteCard {...item} key={item.id} />
				})
			}
		</section>
	)
};

export default QuoteList;