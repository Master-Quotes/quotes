import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
import GlobalContext from "../../context/GlobalContext";
import UserContext from "../../context/UserContext";
import SessionContext from "../../context/SessionContext";
import QuoteContext from "../../context/QuoteContext";

// IMPORT INITIAL STATES
import Quote from "./Quote";

// IMPORT APP COMPONENTS
import QuoteCard from "./QuoteCard";

const QuoteAddForm = () => {

	let history = useHistory();

	const { setModal } = useContext(GlobalContext);
	const { setSession } = useContext(SessionContext);
	const { quote, setQuote } = useContext(QuoteContext);
	console.log("What's the quote? ", quote);

	const [ newQuote, setNewQuote ] = useState(Quote);

	const handleChanges = event => {
		setQuote({ ...quote, [event.target.name]: event.target.value });
	};

	const addQuote = event => {
		event.preventDefault();
		setQuote({...quote});
		axiosWithAuth()
			.put('/quotes/', quote)
			.then( response => {
				console.log("Quote: Added: ", response);
				setQuote(quote);
				history.push("/quotes")
			})
			.catch(error => {
				console.log("Nope, it didn't take: ", error);
			})
	};

	return (
		<div className="form-container">
			<div className="form-header">
				<h1>Add your Quote</h1>
			</div>
			<form onSubmit={addQuote} className="modal-form">
				<label>Speaker
					<input
						name="speaker"
						type="text"
						value={quote.speaker}
						onChange={handleChanges}
					/>
				</label>
				<label>Quote
					<textarea
						id="quote"
						name="quote"
						value={quote.quote}
						onChange={handleChanges}
						className="form-quote"
						rows="4"
						cols="50"
					/>
				</label>
				<div className="button-group form">
					<button>
						Add Mo'Quote
					</button>
					{/*<a href="/quotes" className="outline">Cancel</a>*/}
					<Link to="/quotes" className="outline" onClick={() => setModal(false)}>Cancel</Link>
				</div>
			</form>
		</div>
	)
};

export default QuoteAddForm;