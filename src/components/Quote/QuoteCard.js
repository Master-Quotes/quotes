import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
import GlobalContext from "../../context/GlobalContext";
import QuoteContext from "../../context/QuoteContext";

// IMPORT INITIAL STATES
import Quote from "./Quote";

const QuoteCard = (props) => {

	const { itemToggle, setItemToggle } = useContext(GlobalContext);
	const { quotes, setQuotes } = useContext(QuoteContext);

	// console.log("Item", itemToggle);
	console.log("Id", props.id);
	console.log("Quote", props.quote);
	console.log("Speaker", props.speaker);

	const [editQuote, setEditQuote] = useState(Quote);

	const editQuoteToggle = () => {
		console.log("editing", props);
		if (itemToggle !== props.id) {
			setEditQuote(props);
			setItemToggle(props.id)
		} else {

			axiosWithAuth()
				.put(`https://quotes-db-mike.herokuapp.com/quotes/${props.id}`, editQuote)
				.then(response => {
					console.log("Toggle ", response);
					setQuotes([...quotes.filter(item => item.id !== props.id), response.data]);
					setItemToggle(0);
				})
				.catch(error => console.log("That's an error! " ,error))

		}
	};

	const deleteQuote = () => {
		axiosWithAuth()
			.delete(`https://quotes-db-mike.herokuapp.com/quotes/${props.id}`)
			.then(response => {
				console.log("Response, deleted? ", response);
				setQuotes(quotes.filter(item => item.id !== props.id))
			})
			.catch(error => console.log("That's an error! " ,error))
	};

	const handleChange = event => setEditQuote({...editQuote, [event.target.name]: event.target.value});

	return (
		<article className="card-quote">
			<i className="cis-double-quote-serif-left left" />
			<i className="cis-double-quote-serif-right right" />
			{!itemToggle
				? <>
					<div className="card-options">
						<ul>
							<li>
								<button
									className="card-option option-edit"
									onClick={item => editQuoteToggle(item)}
								><i className="cis-pencil"/></button>
							</li>
							<li>
								<button
									className="card-option option-featured"
									onClick={() => {}}
								><i className="cis-bookmark"/></button>
							</li>
							<li>
								<button
									className="card-option option-delete"
									onClick={item => {deleteQuote(item)}}
								><i className="cis-trash-x"/></button>
							</li>
						</ul>
					</div>
				</>
				: <></>
			}
			<div className="card-container">
			{itemToggle === props.id
				?  <>
					<div className="card-body body-form">
						<form className="card-form">
							<label>
								<textarea
									id="quote"
									name="quote"
									value={editQuote.quote}
									onChange={handleChange}
									rows="4"
								/>
							</label>
							<label>
								<input
									name="speaker"
									value={editQuote.speaker}
									onChange={handleChange} />
							</label>
							<div className="button-group form">
								<button
									onClick={item => editQuoteToggle(item)}
								>Submit</button>
								<Link
									// to"/"
									onClick={() => setItemToggle(0)}
									className="outline"
								>Cancel</Link>
							</div>
						</form>
					</div>
				</>
				: <>
					<div className="card-body">
						<p>{props.quote}</p>
					</div>
					<div className="card-footer">
						<h3>{props.speaker}</h3>
					</div>
				</>}
			</div>
		</article>
	)
};

export default QuoteCard;