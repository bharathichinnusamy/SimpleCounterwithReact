import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	var a = 0,
		b = 0,
		c = 0,
		d = 0,
		e = 0,
		f = 0;
	if (props.interval.toString().length == 1) {
		f = props.interval;
	} else if (props.interval.toString().length == 2) {
		e = props.interval.toString()[0];
		f = props.interval.toString()[1];
	} else if (props.interval.toString().length == 3) {
		d = props.interval.toString()[0];
		e = props.interval.toString()[1];
		f = props.interval.toString()[2];
	} else if (props.interval.toString().length == 4) {
		c = props.interval.toString()[0];
		d = props.interval.toString()[1];
		e = props.interval.toString()[2];
		f = props.interval.toString()[3];
	} else if (props.interval.toString().length == 5) {
		b = props.interval.toString()[0];
		c = props.interval.toString()[1];
		d = props.interval.toString()[2];
		e = props.interval.toString()[3];
		f = props.interval.toString()[4];
	} else {
		a = props.interval.toString()[0];
		b = props.interval.toString()[1];
		c = props.interval.toString()[2];
		d = props.interval.toString()[3];
		e = props.interval.toString()[4];
		f = props.interval.toString()[5];
	}
	return (
		<div className="container">
			<div className="card-deck">
				<div>
					<i className="far fa-clock" />
				</div>
				<div>{a}</div>
				<div>{b}</div>
				<div>{c}</div>
				<div>{d}</div>
				<div>{e}</div>
				<div>{f}</div>
			</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	interval: PropTypes.number
};
