import React, { useState } from "react";
import useMultiStep from "./Steps";

const First = ({ advanceStep, step }) => {
	// stepone config
	const [pancard, setpancard] = useState("");
	const [name, setName] = useState("");
	const [prof, setProf] = useState("");
	const [earning, setearning] = useState("");
	const [monthly, setmonthly] = useState("");
	const [emi, setemi] = useState("");

	const handleChange = e => setpancard(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		advanceStep({ pancard, name, prof, earning, monthly, emi });
	};

	return (
		<div>
			<h4>Step {step + 1}</h4>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='student'>Student is:</label>
					<div className='custom-control custom-radio'>
						<div className='custom-control custom-radio custom-control-inline'>
							<input
								type='radio'
								className='custom-control-input'
								id='defaultInline1'
								name='inlineDefaultRadiosExample'
							/>
							<label className='custom-control-label' htmlFor='defaultInline1'>
								Earning
							</label>
						</div>
						<div className='custom-control custom-radio custom-control-inline'>
							<input
								type='radio'
								className='custom-control-input'
								id='defaultInline2'
								name='inlineDefaultRadiosExample'
							/>
							<label className='custom-control-label' htmlFor='defaultInline2'>
								Not Earning
							</label>
						</div>
					</div>
				</div>
				<div className='form-group'>
					<label for='pancard number'>Pan Card</label>
					<input
						autoFocus
						type='text'
						value={pancard}
						onChange={handleChange}
						className='form-control'
						id='pancard number'
						placeholder='Pan Number'
					/>
				</div>
				<div className='form-group'>
					<label for='name'>Name:</label>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
						className='form-control'
						id='name'
						placeholder='Name'
					/>
				</div>
				<div className='form-group'>
					<label for='Profession'>Profession:</label>
					<input
						type='text'
						value={prof}
						onChange={e => setProf(e.target.value)}
						className='form-control'
						id='Profession'
						placeholder='Profession'
					/>
				</div>
				<div className='form-group'>
					<label for='Earning'>Earning:</label>
					<input
						type='text'
						value={earning}
						onChange={e => setearning(e.target.value)}
						className='form-control'
						id='Earning'
						placeholder='Earning'
					/>
				</div>
				<div className='form-group'>
					<label for='Monthly'>Monthly Income:</label>
					<input
						type='text'
						value={monthly}
						onChange={e => setmonthly(e.target.value)}
						className='form-control'
						id='Monthly'
						placeholder='Monthly'
					/>
					<small id='help' className='form-text text-muted'>
						please note that this will be veified from your bank statement
					</small>
				</div>
				<div className='form-group'>
					<label for='emi'>Currently Paying EMI:</label>
					<input
						type='text'
						value={emi}
						onChange={e => setemi(e.target.value)}
						className='form-control'
						id='emi'
						placeholder='EMI'
					/>
					<small id='help' className='form-text text-muted'>
						Please Note that this wil be verfied from your CIBIL and Bank Statement
					</small>
				</div>
				<button type='submit' className='btn btn-dark'>
					Check Eligility
				</button>
			</form>
		</div>
	);
};

const Second = ({ advanceStep, step }) => {
	//step two config
	const [pancard, setpancard] = useState("");
	const [nameing, setnameing] = useState("");
	const [ageing, setageing] = useState(0);

	const handleChange = e => setpancard(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		advanceStep({ pancard, nameing });
	};
	return (
		<div>
			<div className='form-group'>
				<h4>Step {step + 1}</h4>
				<div className='alert alert-secondary alert-dismissible fade show' role='alert'>
					we will be needing a <strong>Co-Applicant</strong> for Your Loan application in the next
					step
					<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
						<span aria-hidden='true'>&times;</span>
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label for='pancard number'>Pan Card</label>
						<input
							autoFocus
							type='text'
							value={pancard}
							onChange={handleChange}
							className='form-control'
							id='pancard number'
							placeholder='Pan Number'
						/>
					</div>
					<div className='form-group'>
						<label for='name'>Name</label>
						<input
							type='text'
							value={nameing}
							onChange={e => setnameing(e.target.value)}
							className='form-control'
							id='name'
							placeholder='Name'
						/>
					</div>
					<div className='form-group'>
						<label for='age'>Age</label>
						<input
							type='text'
							value={ageing}
							onChange={e => setageing(e.target.value)}
							className='form-control'
							id='age'
							placeholder='Age'
						/>
					</div>
					<button type='submit' className='btn btn-dark'>
						Process to Co-Applicant
					</button>
				</form>
			</div>
		</div>
	);
};

const Third = ({ advanceStep, step }) => {
	//step three config
	const [showPanCard, setshowPanCard] = useState("");
	const [name, setName] = useState("");
	const [prof, setProf] = useState("");
	const [earning, setearning] = useState("");
	const [monthly, setmonthly] = useState("");
	const [emi, setemi] = useState("");

	const handleChange = e => setshowPanCard(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		advanceStep({ showPanCard, name, prof, earning, monthly, emi });
	};

	return (
		<div>
			<h4>Step {step + 1}</h4>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label for='pancard number'>Pan Card</label>
					<input
						autoFocus
						type='text'
						value={showPanCard}
						onChange={handleChange}
						className='form-control'
						id='pancard number'
						placeholder='Pan Number'
					/>
				</div>
				<div className='form-group'>
					<label for='name'>Name:</label>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
						className='form-control'
						id='name'
						placeholder='Name'
					/>
				</div>
				<div className='form-group'>
					<label for='Profession'>Profession:</label>
					<input
						type='text'
						value={prof}
						onChange={e => setProf(e.target.value)}
						className='form-control'
						id='Profession'
						placeholder='Profession'
					/>
				</div>
				<div className='form-group'>
					<label for='Earning'>Earning:</label>
					<input
						type='text'
						value={earning}
						onChange={e => setearning(e.target.value)}
						className='form-control'
						id='Earning'
						placeholder='Earning'
					/>
				</div>
				<div className='form-group'>
					<label for='Monthly'>Monthly Income:</label>
					<input
						type='text'
						value={monthly}
						onChange={e => setmonthly(e.target.value)}
						className='form-control'
						id='Monthly'
						placeholder='Monthly'
					/>
					<small id='help' className='form-text text-muted'>
						please note that this will be veified from your bank statement
					</small>
				</div>
				<div className='form-group'>
					<label for='emi'>Currently Paying EMI:</label>
					<input
						type='text'
						value={emi}
						onChange={e => setemi(e.target.value)}
						className='form-control'
						id='emi'
						placeholder='EMI'
					/>
					<small id='help' className='form-text text-muted'>
						Please Note that this wil be verfied from your CIBIL and Bank Statement
					</small>
				</div>
				<button type='submit' className='btn btn-dark'>
					Check Eligility
				</button>
			</form>
		</div>
	);
};

const Done = ({ formData }) => (
	<div className='container'>
		<p className='text-center'>
			<img
				className='mb-3 mt-4'
				src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-check-mark-4.png'
				alt='...'
				style={{ width: "50px" }}
			/>
			<h1>Congratulations!</h1>
			you staisy our minimum eligibility criteria for loadn processing please complete your kyc and
			documents verfication process to complete the loan application
		</p>
		<p className='text-center'>
			<a href='/' class='btn btn-outline-dark ' role='button' aria-pressed='true'>
				Continue
			</a>
			<h2 className='text-center'>Final result:</h2>
			<pre>{JSON.stringify(formData, null, "  ")}</pre>
		</p>
	</div>
);

const steps = [First, Second, Third];

function Form() {
	// initial form config
	const [completed, setComplete] = useState(false);
	const [formData, setFormData] = useState({ Data: "UserInfomation" });
	const handleComplete = data => {
		setFormData(data);
		setComplete(true);
	};

	const multiStep = useMultiStep({
		initialStep: 0,
		numberOfSteps: 3,
		initialState: formData,
		onComplete: handleComplete
	});

	const Step = steps[multiStep.step];

	return (
		<div className='container'>
			{completed ? <Done formData={formData} /> : <Step {...multiStep} />}
		</div>
	);
}

export default Form;
