import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
// import GlobalContext from "../../context/GlobalContext";
import UserContext from "../../context/UserContext";
import SessionContext from "../../context/SessionContext";
import QuoteContext from "../../context/QuoteContext";

// IMPORT INITIAL STATES
import Quote from "./Quote";

// IMPORT APP COMPONENTS
import QuoteCard from "./QuoteCard";

const QuoteAddForm = () => {

	let history = useHistory();

	// const { history } = useContext(GlobalContext);
	const { setSession } = useContext(SessionContext);
	const { quote, setQuote } = useContext(QuoteContext);

	const [ newQuote, setNewQuote ] = useState(Quote);

	return (
			<div>

			</div>
	)
};

export default QuoteAddForm;