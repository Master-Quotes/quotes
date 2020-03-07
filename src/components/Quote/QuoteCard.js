import React from "react";

const QuoteCard = () => {
	return (
		<article className="card-quote">
			<div className="card-body">
				"(Quote & Speaker)"
				<h3>{props.speaker}</h3>
				<p>{props.quote}</p>
			</div>
		</article>
	)
};

export default QuoteCard;