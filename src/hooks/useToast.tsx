import React, { createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type IToastProps = {
  toast: typeof toast;
};

const ToastContext = createContext<IToastProps>({} as IToastProps);

export function ToastProvider({ children }: any) {
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="toast-wrapper">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  return context;
}
