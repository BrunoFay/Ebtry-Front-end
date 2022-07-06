import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Modal({
  isAlertModalOpen,
  modalInfos,
  setIsAlertModalOpen,
}: any) {
  return (
    <>
      <Transition appear show={isAlertModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsAlertModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className='flex items-center justify-center'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.6599 18.3398L18.3399 29.6598" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M29.6599 29.6598L18.3399 18.3398" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24V24C42 33.942 33.942 42 24 42Z" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center py-4 font-medium leading-6 text-gray-900"
                  >
                    {modalInfos.title}
                  </Dialog.Title>
                  <div className="mt-2 flex items-center justify-center">
                    <p className="text-sm text-gray-500 ">
                      {modalInfos.paragraph}
                    </p>
                  </div>

                  <div className="pt-7 flex justify-evenly">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border-2 border-transparent focus:border-2 transition-all hover:border-2 hover:ring-green-700 ring-transparent outline-none ring-2 focus:ring-green-700 bg-green-500 px-4 py-2 text-sm text-white font-extrabold "
                      onClick={() => setIsAlertModalOpen(false)}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}