import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className='navbar navbar-light navbar-expand-md border-bottom mb-3'>
				<div className='container-fluid'>
					<Link className='navbar-brand' href='/'>
						Propelld
					</Link>
					<button data-toggle='collapse' className='navbar-toggler' data-target='#navcol-1'>
						<span className='sr-only'>Toggle navigation</span>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navcol-1'>
						<ul className='nav navbar-nav ml-auto'>
							<li role='presentation' className='nav-item'>
								<NavLink className='nav-link active' exact to='/'>
									Dashboard
								</NavLink>
							</li>
							<li role='presentation' className='nav-item'>
								<NavLink className='nav-link active' exact to='/approval'>
									Approval Status
								</NavLink>
							</li>
							<li role='presentation' className='nav-item'>
								<NavLink className='nav-link active' exact to='/kyc'>
									Upload KYC
								</NavLink>
							</li>
							<li role='presentation' className='nav-item'>
								<NavLink className='nav-link active' exact to='/'>
									Logout
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
