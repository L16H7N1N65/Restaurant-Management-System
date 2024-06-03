import React from 'react';

function Message({ variant, children }) {
  const color = variant === 'danger' ? 'red' : 'green';

  return (
    <div className={`border ${color}-500 text-${color}-500 bg-${color}-100 p-4 rounded`}>
      {children}
    </div>
  );
}

export default Message;