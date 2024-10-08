import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const SdError = ( { refresh, baseURL } ) => {
    return (
        <>
          <Modal show={true} size="xl" popup>
            <Modal.Body className="p-12">
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                   Server and Database Connection Failed!
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={refresh}>
                    {"Refresh"}
                  </Button>
                  <Button color="gray">
                    <a href="/">Homepage</a>
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default SdError