import React from 'react';
import Button from '../components/Button';

export default function Banner() {
  let permission = 'Default';
  switch (Notification.permission) {
    case 'denied':
      permission = 'Denied';
      break;
    case 'granted':
      permission = 'Granted';
      break;
    default:
      permission = 'Default';
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
