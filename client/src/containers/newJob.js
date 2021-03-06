import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import Dialog from "material-ui/Dialog";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import ExpandTransition from "material-ui/internal/ExpandTransition";
import TextField from "material-ui/TextField";

import { ReviewConfirmation } from "../components/Confirmations";
import JobForm from "../components/Forms/JobForm";
import { AddButton } from "../components/Common";

import { submitJob } from "../actions/jobs";

// this entire container may look better with a dialog from material-ui
// more on dialogs here:  http://www.material-ui.com/#/components/dialog

// the architecture of this container needs to be fixed - the action buttons should be within the JobForm component
class NewJob extends Component {
	state = {
		open: true,
		loading: false,
		finished: false,
		stepIndex: 0,
		jobValidated: false
	};

	dummyAsync = cb => {
		this.setState({ loading: true }, () => {
			this.asyncTimer = setTimeout(cb, 500);
		});
	};

	handleNext = () => {
		const { stepIndex, loading } = this.state;
		const { jobForm } = this.props.form;
		if (!this.state.loading) {
			this.dummyAsync(() =>
				this.setState({
					loading: false,
					stepIndex: stepIndex + 1,
					finished: stepIndex >= 2
				})
			);
		}
		if (stepIndex === 2) {
			this.handleClose()
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

	getStepContent = stepIndex => {
		switch (stepIndex) {
			case 0:
				return <JobForm />;
			case 1:
				return (
					<ReviewConfirmation reviewData={this.props.form.jobForm.values} />
				);
			case 2:
				return <p>Your job post has been submitted!</p>;
			case 3:
				return this.handleClose();
			default:
				return "You're a long way from home sonny jim!";
		}
	};

	renderContent = () => {
		const { finished, stepIndex, jobValidated } = this.state;
		const { submitJob } = this.props;
		const { jobForm } = this.props.form;

		// could be refactored into a helper component
		const validate = () => {
			if (jobForm) {
				let { anyTouched, syncErrors } = jobForm;
				if (anyTouched && syncErrors.recipients === undefined) {
					return false;
				} else {
					return true;
				}
			}
		};

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
				<div
					style={{ marginTop: 24, marginBottom: 12 }}
					className="button-container"
				>
					<RaisedButton
						label="Back"
						disabled={stepIndex === 0}
						onClick={this.handlePrev}
						style={{ marginRight: 12 }}
						className="button"
					/>
					<RaisedButton
						label={
							stepIndex === 2
								? "Finish"
								: stepIndex === 1 ? "Submit Survey" : "Next"
						}
						disabled={validate()}
						primary={true}
						onClick={
							stepIndex === 2 && !this.state.loading
								? submitJob(jobForm.values) && this.handleNext
								: this.handleNext
						}
						className="button"
					/>
				</div>
			</div>
		);
	};
	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
		this.props.history.push("/dashboard/jobs");
	};

	render() {
		const { loading, stepIndex, jobValidated } = this.state;
		console.log(this.props.form);
		console.log(this.state.stepIndex);
		return (
			<div className="new-job">
				<h1 className="title">Add a New Job</h1>
				<AddButton route={"/dashboard/jobs/new"} open={this.handleOpen} />
				<Dialog
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
					className="form-dialog"
				>
					<div style={{ width: "100%", maxWidth: 700, margin: "auto" }}>
						<Stepper activeStep={stepIndex}>
							<Step>
								<StepLabel>Add job information</StepLabel>
							</Step>
							<Step>
								<StepLabel>Review your job post</StepLabel>
							</Step>
							<Step>
								<StepLabel>Create the job post</StepLabel>
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

export default connect(mapStateToProps, { submitJob })(NewJob);