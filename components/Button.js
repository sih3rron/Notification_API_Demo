import React from 'react';
import handlePermissions from '../functions/handlePermissions';

export default function Button({ text }) {
  return (
    <button
      type="button"
      className="permission bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-32"
      onClick={handlePermissions}
    >
      {text}
    </button>
  );
}
