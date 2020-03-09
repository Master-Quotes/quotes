import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
import GlobalContext from "../../context/GlobalContext";
import QuoteContext from "../../context/QuoteContext";

// IMPORT INITIAL STATES
import Quote from "./Quote";

const QuoteCardEdit = () => {

	const [editQuote, setEditQuote] = useState(Quote);

	const handleChange = event => setEditQuote({...editQuote, [event.target.name]: event.target.value});

	return (
		<>
			<textarea
				id="quote"
				name="quote"
				value={editQuote.quote}
				onChange={handleChange}
				rows="4"
				cols="50"
			/>
				<input
					name="speaker"
					value={editQuote.speaker}
					onChange={handleChange}
				/>
				{/*<button onClick={item => {editQuoteToggle(item)}}>Submit</button>*/}
		</>
	)
};

export default QuoteCardEdit;