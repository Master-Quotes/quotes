import React, { useContext } from "react";

// IMPORT APP COMPONENTS
import QuoteCard from "./QuoteCard";

// IMPORT CONTEXTS
import GlobalContext from "../../context/GlobalConetext";
import UserContext from "../../context/UserContext";
import SessionContext from "../../context/SessionContext";
import QuoteContext from "../../context/QuoteContext";

const QuoteAddForm = () => {

	const { history } = useContext(GlobalContext);
	const { setSession } = useContext(SessionContext);
	const { quote, setQuote } = useContext(QuoteContext);

	return (
			<div>

			</div>
	)
};

export default QuoteAddForm;