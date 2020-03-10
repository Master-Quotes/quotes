import React from 'react';
import { useHistory } from "react-router-dom";

const Back = () => {

	let history = useHistory();

	return (
		<>
		<button
			className="button button-back"
			onClick={() =>  history.goBack()}
		><i className="cis-chevron-circle-left"/>

		</button>
		</>
	);
};

export default Back;