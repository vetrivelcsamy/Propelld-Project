import { useState } from "react";

const useMultiStep = ({ initialState, initialStep, numberOfSteps, onComplete }) => {
	const [state, setState] = useState(initialState);
	const [step, setStep] = useState(initialStep);

	const advanceStep = newState => {
		const updateState = {
			...state,
			...newState
		};
		// Logic on steps
		if (step + 1 === numberOfSteps) {
			onComplete(updateState);
		} else {
			setState(updateState);
			setStep(step + 1);
		}
	};

	return {
		step,
		state,
		advanceStep
	};
};

export default useMultiStep;
