import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import ExpandTransition from "material-ui/internal/ExpandTransition";
import TextField from "material-ui/TextField";

import JobReview from "../components/Confirmations";
import JobForm from "../components/Forms/JobForm";
import { AddButton } from "../components/Common";

// this entire container may look better with a dialog from material-ui
// more on dialogs here:  http://www.material-ui.com/#/components/dialog

// the architecture of this container needs to be fixed - the action buttons should be within the JobForm component
class NewJob extends Component {
	state = {
		open: true,
		loading: false,
		finished: false,
		stepIndex: 0
	};
	dummyAsync = cb => {
		this.setState({ loading: true }, () => {
			this.asyncTimer = setTimeout(cb, 500);
		});
	};

	handleNext = () => {
		const { stepIndex } = this.state;
		if (!this.state.loading) {
			this.dummyAsync(() =>
				this.setState({
					loading: false,
					stepIndex: stepIndex + 1,
					finished: stepIndex >= 2
				})
			);
		}
	};

	handlePrev = () => {
		const { stepIndex } = this.state;
		if (!this.state.loading) {
			this.dummyAsync(() =>
				this.setState({
					loading: false,
					stepIndex: stepIndex - 1
				})
			);
		}
	};

	getStepContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return <JobForm />;
			case 1:
				return <JobReview />;
			case 2:
				return (
					<p>
						Try out different ad text to see what brings in the most customers,
						and learn how to enhance your ads using features like ad extensions.
						If you run into any problems with your ads, find out how to tell if
						they're running and how to resolve approval issues.
					</p>
				);
			default:
				return "You're a long way from home sonny jim!";
		}
	}
	renderContent() {
		const { finished, stepIndex } = this.state;
		const contentStyle = { margin: "0 16px", overflow: "hidden" };

		if (finished) {
			return (
				<div style={contentStyle}>
					<p>
						<a
							href="#"
							onClick={event => {
								event.preventDefault();
								this.setState({ stepIndex: 0, finished: false });
							}}
						>
							Click here
						</a>{" "}
						to reset the example.
					</p>
				</div>
			);
		}

		return (
			<div style={contentStyle}>
				<div>{this.getStepContent(stepIndex)}</div>
				<div style={{ marginTop: 24, marginBottom: 12 }}>
					<FlatButton
						label="Back"
						disabled={stepIndex === 0}
						onClick={this.handlePrev}
						style={{ marginRight: 12 }}
					/>
					<RaisedButton
						label={stepIndex === 2 ? "Finish" : "Next"}
						primary={true}
						className="submit"
						onClick={this.handleNext}
					/>
				</div>
			</div>
		);
	}
	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
		this.props.history.push("/dashboard/jobs");
	};

	render() {
		const { loading, stepIndex } = this.state;
		return (
			<div className="new-job">
				<h1 className="title">Add a New Job</h1>
				<AddButton route={"/dashboard/jobs/new"} open={this.handleOpen} />
				<Dialog
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<div style={{ width: "100%", maxWidth: 700, margin: "auto" }}>
						<Stepper activeStep={stepIndex}>
							<Step>
								<StepLabel>Select campaign settings</StepLabel>
							</Step>
							<Step>
								<StepLabel>Create an ad group</StepLabel>
							</Step>
							<Step>
								<StepLabel>Create an ad</StepLabel>
							</Step>
						</Stepper>
						<ExpandTransition loading={loading} open={true}>
							{this.renderContent()}
						</ExpandTransition>
					</div>
				</Dialog>
			</div>
		);
	}
}

function mapStateToProps({ form }) {
	return { form };
}

export default connect(mapStateToProps)(NewJob);