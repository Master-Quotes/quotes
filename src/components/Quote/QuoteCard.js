import React from "react";

const QuoteCard = () => {
	return (
		<article className="card-quote">
			<div className="card-body">
				"(Quote & Speaker)"
				<h3>{props.speaker}</h3>
				<p>{props.quote}</p>
				"(Quote)"
			</div>
			<div className="card-footer">
				"(Speaker)"
			</div>
		</article>
	)
};

export default QuoteCard;