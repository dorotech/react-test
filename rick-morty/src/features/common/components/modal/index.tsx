import { Dialog } from '@headlessui/react';
import { ReactNode } from 'react';

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  onClose(): void;
}

export function Modal({ children, isOpen, onClose }: IModal) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="z-50 relative">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Container to center the modal */}
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-full max-w-[41rem] bg-zinc-800 p-4 py-10 rounded-md">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
