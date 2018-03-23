import React, { Component } from "react";

// this utilizes the child library of stripe, checkout.js, to create a react component
// which renders the stripe checkout form
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
	render() {
		// will stop this statement to test it
		// debugger;

		return (
			<div className="stripe-payment">
				<StripeCheckout
					amount={500}
					token={token => console.log(token)}
					stripeKey={process.env.REACT_APP_STRIPE_KEY}
				/>
			</div>
		);
	}
}

export default Payments;
