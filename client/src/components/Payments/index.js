import React, { Component } from "react";
import PropTypes from "prop-types";
import { FlatButton, AppBar, Drawer, RaisedButton } from "material-ui";
import StripeCheckout from "react-stripe-checkout";
/* this utilizes the child library of stripe, checkout.js, to create a react component
// which renders the stripe checkout form
// notes for the properties of the StripeCheckout component:
// ammount = the ammount the payment form will accept, defaults to USD, currency is cents - 500 = $5.00
// name = the header of the form
// description = the description of the form
// token = the token that is returned with the transaction after it's processed by stripe - confirms money has been accepted into the vendors account
// the returned token contains encrypted data which contains the following important properties:
// client_ip:  the payer IP address
// id: the encrypted token for the transaction
// email: the email address of the payer
// card: card data
// stripeKey = the publish stripe key we set in our .env file

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

// the number we are using for the handleToken credit card is:
// # 4242 4242 4242 4242
// expiration: any future date
// cvc: any 3 digits

class Payments extends Component {
	render() {
		// will stop this statement to handleToken it
		// debugger;

		let { handleToken } = this.props;

		return (
			<div className="stripe-payment">
				<StripeCheckout
					amount={500}
					token={token => handleToken(token)}
					stripeKey={process.env.REACT_APP_STRIPE_KEY}
					name="EngBook"
					description="$5.00 for 5 Job Post credits."
				>
					<FlatButton className="add-credits" label="Add Credits" />
				</StripeCheckout>
			</div>
		);
	}
}

Payments.defaultProps = {
	handleToken: "handleToken"
};

Payments.propTypes = {
	handleToken: PropTypes.object
};

export default Payments;
