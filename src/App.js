import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Approval from "./components/ApprovalStatus";
import UploadKyc from "./components/UploadKYC";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Route exact path='/' component={Home} />
					<Route exact path='/form' component={Form} />
					<Route exact path='/approval' component={Approval} />
					<Route exact path='/kyc' component={UploadKyc} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
