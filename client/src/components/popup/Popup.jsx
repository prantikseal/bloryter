

const Popup = ({ isOpen, onClose, children, title }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900" id="modal-title">
                      {title}
                    </h3>
                    <div className="mt-2">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-4 sm:px-6 sm:flex sm:flex-row-reverse flex justify-center items-center">
                <button
                  onClick={onClose}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md  px-4 py-2  text-base font-medium text-secondary hover:text-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel { title }
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
