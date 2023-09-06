import React from 'react';

import "./App.module.css"
import TimerUseNowStop from "../TimerUseNow/TimerUseNowStop";
import TimerPauseDefault from "../TimerPauseDefault/TimerPauseDefault";
import TimerUseNowPause from "../TimerUseNowPause/TimerUseNowPause";
import TimerDefault from "../TimerDefault/TimerDefault";

const App = () => {
	return (
		<div>
			<TimerDefault/>
			<TimerUseNowStop/>
			<TimerPauseDefault/>
			<TimerUseNowPause/>
		</div>
	);
};

export default App;