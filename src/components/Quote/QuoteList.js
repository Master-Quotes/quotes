import React, { useContext } from "react";

// IMPORT APP COMPONENTS
import QuoteCard from "./QuoteCard";

// IMPORT CONTEXTS
import QuoteContext from "../../context/QuoteContext";

const QuotesList = () => {

	const { quote, setQuote } = useContext(QuoteContext);
	
	return (
		<section className="cards-quotes">
			(Quotes go here)
		</section>
	)
};

export default QuotesList;