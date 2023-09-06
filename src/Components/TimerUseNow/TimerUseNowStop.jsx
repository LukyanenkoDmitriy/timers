import {useEffect, useState} from "react";
import useNow from "../CustomHooks/UseNow";


const TimerUseNowStop = () => {
	const [startAt, setStartAt] = useState()
	
	const now = useNow(1000, startAt);
	
	const fromStart = now - (startAt ?? now)
	
	const timer = fromStart;
	const countDown = Math.max(0, 6000 - fromStart)
	
	const toggleTimer = () => {
		if (startAt) setStartAt()
		else setStartAt(Date.now())
	}
	const isCountEnd = countDown === 0
	
	useEffect(() => {
		if (isCountEnd) {
			alert("Count down")
		}
	}, [isCountEnd]);
	
	return (
		<div>
			<button onClick={toggleTimer}>{!startAt ? "start" : "stop"}</button>
			<div>timer {Math.floor((timer / 1000))}</div>
			<div>countDown {Math.ceil(countDown / 1000)}</div>
		</div>
	);
};

export default TimerUseNowStop;