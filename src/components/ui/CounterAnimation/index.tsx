import React from 'react';
import CountUp from 'react-countup';

export function CounterAnimation({ end, duration }: { end: number; duration: number }) {
  return <CountUp end={end} duration={duration} />;
}
