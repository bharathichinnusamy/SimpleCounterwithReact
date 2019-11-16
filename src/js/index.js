//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { SecondsCounter } from "./component/secondscounter";

//render your react application
var counter = 0;
ReactDOM.render(
	<SecondsCounter interval={counter} />,
	document.querySelector("#app")
);
setInterval(() => {
	counter = counter + 1;
	ReactDOM.render(
		<SecondsCounter interval={counter} />,
		document.querySelector("#app")
	);
}, 100);
