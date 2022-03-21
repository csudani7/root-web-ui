import React, { ReactElement } from 'react';

interface OutlinedCardProps {
  children: React.ReactElement | ReactElement ;
}

export default function OutlinedCard({ children }: OutlinedCardProps) {
  return <div className="border-solid border-3 border-easternBlue rounded-lg md:p-6 lg:p-6 p-6 items-center"> {children}</div>;
}
