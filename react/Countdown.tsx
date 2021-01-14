//react/Countdown.tsx
import React, { useState } from "react";
import { TimeSplit } from "./typings/global";
import { tick, getTwoDaysFromNow } from "./utils/time";
import { useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = ["countdown"];
interface CountdownProps {
  targetDate: string;
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow();

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate = DEFAULT_TARGET_DATE,
}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const handles = useCssHandles(CSS_HANDLES);

  tick(targetDate, setTime);

  return (
    <div className={`${handles.countdown} db tc`}>
      {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
    </div>
  );
};

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {
    targetDate: {
      title: "Final date",
      description: "Final date used in the countdown",
      type: "string",
      default: "02/02/2021",
    },
  },
};

export default Countdown;
