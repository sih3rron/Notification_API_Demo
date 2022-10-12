import React from 'react';
import handlePermissions from '../functions/handlePermissions';

export default function Button({ text }) {
  return (
    <button
      type="button"
      className={
        `${text} ${text}` +
        ':hover text-white font-bold py-2 px-4 border border-blue-700 rounded w-32'
      }
      onClick={handlePermissions}
    >
      {`${
        text.slice(0, 1).toUpperCase() +
        text.slice(1, text.length).toLowerCase()
      }`}
    </button>
  );
}
