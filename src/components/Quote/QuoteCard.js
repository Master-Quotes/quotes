import React from "react";

const QuoteCard = ({quote, speaker}) => {
	return (
		<article className="card-quote">
			<div className="card-body">
				<p>{quote}</p>
			</div>
			<div className="card-footer">
				<h3>{speaker}</h3>
			</div>
		</article>
	)
};

export default QuoteCard;