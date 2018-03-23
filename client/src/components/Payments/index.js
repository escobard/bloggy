import React, { Component } from "react";

// this utilizes the child library of stripe, checkout.js, to create a react component
// which renders the stripe checkout form
// notes for the properties of the StripeCheckout component:
// ammount = the ammount the payment form will accept, defaults to USD, currency is cents - 500 = $5.00
// token = the token that is returned with the transaction after it's processed by stripe - confirms money has been accepted into the vendors account
// stripeKey = the publish stripe key we set in our .env file
/* 
	  name="Three Comma Co." // the pop-in header title
	  description="Big Data Stuff" // the pop-in header subtitle
	  image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
	  ComponentClass="div"
	  panelLabel="Give Money" // prepended to the amount in the bottom pay button
	  amount={1000000} // cents
	  currency="USD"
	  stripeKey="..."
	  locale="zh"
	  email="info@vidhub.co"
	  // Note: Enabling either address option will give the user the ability to
	  // fill out both. Addresses are sent as a second parameter in the token callback.
	  shippingAddress
	  billingAddress={false}
	  // Note: enabling both zipCode checks and billing or shipping address will
	  // cause zipCheck to be pulled from billing address (set to shipping if none provided).
	  zipCode={false}
	  alipay // accept Alipay (default false)
	  bitcoin // accept Bitcoins (default false)
	  allowRememberMe // "Remember Me" option (default true)
	  token={this.onToken} // submit callback
	  opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
	  closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
	  // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
	  // you are using multiple stripe keys
	  reconfigureOnUpdate={false}
	  // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
	  // useful if you're using React-Tap-Event-Plugin
	  triggerEvent="onTouchTap"
		*/
// more options here: https://github.com/azmenak/react-stripe-checkout
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
	render() {
		// will stop this statement to test it
		// debugger;

		// the component here needs to be styled to look like the other buttons in the authorized login view
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
