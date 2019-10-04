import React from "react";
// import axios from "axios";

class UploadKyc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [],
			phone: ""
		};
	}
	verfiyAahar = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	showResult = e => {
		const object = {
			phone: this.state.phone
		};
		this.setState({
			array: [...this.state.array, object]
		});
		console.log("go to kyc");
	};
	render() {
		return (
			<div>
				<div className='container'>
					<h3 className='text-center'>Aadhar linked to Mobile Number </h3>
					<div className='row'>
						<div className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='checkbox'
								id='inlineCheckbox2'
								value='option2'
							/>
							<label className='form-check-label'>YES - KYC Verfiy</label>
						</div>
					</div>
					<div className='row'>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' value='option2' />
							<label className='form-check-label'>Not Now</label>
						</div>
					</div>

					<div className='form-group mt-5'>
						<label>Aadhar Mobile Number</label>
						<input
							type='text'
							value={this.state.phone}
							onChange={this.verfiyAahar}
							name='phone'
							className='form-control'
							placeholder='Mobile Number'
						/>
					</div>
					<button type='button' className='btn btn-dark' onClick={this.showResult}>
						Process to KYC
					</button>
				</div>
			</div>
		);
	}
}

export default UploadKyc;
