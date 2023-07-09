import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ToastContext } from './ToastContext';
import { Toast } from './Toast';

function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);

  return first + second;
}

export const ToastProvider = (props) => {
  const [toasts, setToasts] = useState([]);
  const open = (content) => {
    console.log('open is run');
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID(), content },
    ]);
  };

  const close = (id) => {
    console.log('close is run')
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    )};

  // Memoize contextValue
  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className="toasts-wrapper">
          {toasts &&
            toasts.map((toast) => (
              <Toast key={toast.id} close={() => close(toast.id)}>
                {toast.content} + {toast.id}
              </Toast>
            ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
