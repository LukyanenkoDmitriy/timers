import React, {useEffect, useState} from "react";
import useNow from "../CustomHooks/UseNow";

export default function TimerUseNowPause() {
	const [startAt, setStartAt] = useState();
	const [initialTimer, setInitialTimer] = useState(0);
	
	const now = useNow(100, startAt);
	
	const timeFromStart = now - (startAt ?? now);
	
	const timer = timeFromStart + initialTimer;
	const countDown = 60000 - timer;
	
	const toggleTimer = () => {
		if (startAt) {
			setInitialTimer(timer);
			setStartAt();
		} else {
			setStartAt(Date.now());
		}
	};
	
	const isCountEnd = countDown === 0;
	useEffect(() => {
		if (isCountEnd) {
			alert("Count down");
		}
	}, [isCountEnd]);
	
	return (
		<div>
			<button onClick={toggleTimer}>{!startAt ? "Start" : "Pause"}</button>
			<div>timer {Math.floor(timer / 1000)}</div>
			<div>countDown {Math.ceil(countDown / 1000)}</div>
		</div>
	);
}

const resendTimeout = 10000;

function ResetPassword() {
	const [sentAt, setSentAt] = useState();
	
	// Третий аргумент для отменты рендера useNow после окончания таймера
	const now = useNow(1000, sentAt, (now) => {
		if (sentAt && resendTimeout - (now - sentAt) < 0) {
			setSentAt();
		}
	});
	
	const msToResend = sentAt ? resendTimeout - (now - sentAt) : 0;
	const isDisabled = msToResend > 0;
	
	const handleSend = () => {
		setSentAt(Date.now());
	};
	
	return (
		<button disabled={isDisabled} onClick={handleSend}>
			{isDisabled ? `wait: ${Math.floor(msToResend / 1000)}` : "Reset password"}
		</button>
	);
}



