import React from "react";
import axios from "axios";

class Approval extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [],
			pancard: "",
			age: "",
			Prof: "",
			montly: 0
		};
	}
	checkStaus = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	get_result = e => {
		e.preventDefault();
		console.log(this.state);

		var data = {
			PANNumber: this.state.pancard
		};

		axios({
			method: "POST",
			url: "http://863bbefc.ngrok.io/hack/2019/verification/pan/fetch",
			data: data
		})
			.then(response => {
				console.log(response.data);
				console.log(response.data.PayLoad);
				const object = {
					PayLoad: response.data.PayLoad
				};
				this.setState({
					array: [...this.state.array, object]
				});
			})
			.catch(err => alert(err));
	};

	render() {
		return (
			<div>
				<div className='container'>
					<form>
						<div class='form-group mt-5'>
							<label>Pancard Number</label>
							<input
								type='text'
								value={this.state.PANNumber}
								onChange={this.checkStaus}
								name='PANNumber'
								class='form-control'
								placeholder='Pan Number'
							/>
						</div>

						<button type='button' class='btn btn-dark' onClick={this.get_result}>
							Check Status
						</button>
					</form>
				</div>

				<div className='container'>
					<div className='row'>
						<table class='table mt-5'>
							<thead>
								<tr>
									<th scope='col'>Name</th>
									<th scope='col'>Father Name</th>
									<th scope='col'>DOB</th>
									<th scope='col'>PAN Number</th>
								</tr>
							</thead>
							<tbody>
								{this.state.array.map(element => {
									return (
										<tr>
											<th scope='row'>{element.PayLoad.Name}</th>
											<td>{element.PayLoad.FatherName}</td>
											<td>{element.PayLoad.DateOfBirth}</td>
											<td>{element.PayLoad.PANNumber}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
export default Approval;
