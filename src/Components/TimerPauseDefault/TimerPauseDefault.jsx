import React, {useEffect, useState} from 'react';

const TimerPauseDefault = () => {
	const [enabled, setEnabled] = useState(false)
	const [timer, setTimer] = useState(0)
	const [countDown, setCountDown] = useState(10)
	
	const toogleTimer = () => {
		setEnabled((e) => !e)
	}
	useEffect(() => {
		if (!enabled) return
		const i = setInterval(() => {
			setTimer((t) => t + 1)
			setCountDown((c) => Math.max(c - 1, 0))
		}, 1000)
		return () => clearInterval(i)
	}, [enabled]);
	
	useEffect(() => {
		if (countDown === 0) {
			alert("count down")
		}
	}, [countDown])
	
	return (
		<div>
			<button onClick={toogleTimer}>{!enabled ? 'start' : 'stop'}</button>
			<div>timer {timer}</div>
			<div>countDown {countDown}</div>
		</div>
	);
};

export default TimerPauseDefault;

