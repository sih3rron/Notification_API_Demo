import React, { useState } from 'react';
import Button from './Button';

export default function Banner() {
  const [show, setShow] = useState(true);
  const showBanner = () => {
    setShow((current) => !current);
  };

  let permission = Notification.permission;

  return (
    <div>
      {show === false ? null : (
        <div className="mx-auto bg-gray-900 p-4">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex w-0 flex-1 items-center text-white">
              This is my Banner.
            </div>
            <Button text={permission} />
            <div className="times" onClick={showBanner}></div>
          </div>
        </div>
      )}
    </div>
  );
}
