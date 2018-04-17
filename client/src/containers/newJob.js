import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

import JobForm from "../components/Forms/JobForm";
import { AddButton } from "../components/Common";
// this entire container may look better with a dialog from material-ui
// more on dialogs here:  http://www.material-ui.com/#/components/dialog
class NewJob extends Component {
	state = {
		open: true
	};
	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
		this.props.history.push("/dashboard/jobs")
	};

	render() {
		console.log(this.props)
		const actions = [
			<FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
			<FlatButton
				label="Submit"
				primary={true}
				keyboardFocused={true}
				onClick={this.handleClose}
			/>
		];
		return (
			<div className="new-job">
				<h1 className="title">Add a New Job</h1>
				<AddButton route={"/dashboard/jobs/new"} open={this.handleOpen} />
				<Dialog
					title="Add a new Job"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<JobForm />
				</Dialog>
			</div>
		);
	}
}

function mapStateToProps({ form }) {
	return { form };
}

export default connect(mapStateToProps)(NewJob);