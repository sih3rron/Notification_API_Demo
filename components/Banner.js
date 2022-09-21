import React from 'react';
import Button from '../components/Button';

export default function Banner() {
  let permission = 'default';
  switch (Notification.permission) {
    case 'denied':
      permission = 'denied';
      break;
    case 'granted':
      permission = 'granted';
      break;
    default:
      permission = 'default';
  }
  console.log(Notification.permission);
  return (
    <div className="mx-auto bg-gray-900 p-4">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex w-0 flex-1 items-center text-white">
          This is my Banner.
        </div>
        <Button text={permission} />
      </div>
    </div>
  );
}
