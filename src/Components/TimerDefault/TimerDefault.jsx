import {useEffect, useState} from "react";

const TimerDefault = () => {
	const [enabled, setEnabled] = useState(false);
	const [timer, setTimer] = useState(0);
	const [countDown, setCountDown] = useState(10);
	
	const toggleTimer = () => {
		setEnabled((e) => !e);
		setTimer(0);
		setCountDown(10);
	};
	
	useEffect(() => {
		if (!enabled) return;
		const i = setInterval(() => {
			setTimer((t) => t + 1);
			setCountDown((c) => Math.max(c - 1, 0));
		}, 100);
		return () => {
			clearInterval(i);
		};
	}, [enabled]);
	
	useEffect(() => {
		if (countDown === 0) {
			alert("Count down");
		}
	}, [countDown]);
	
	return (
		<div>
			<button onClick={toggleTimer}>{!enabled ? "Start" : "Stop"}</button>
			<div>timer {timer}</div>
			<div>countDown {countDown}</div>
		</div>
	);
}
export default TimerDefault