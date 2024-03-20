import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ViewComplaints() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#333";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Description
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Location
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Status
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Water logging
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              The gutters have been overflowing Since last week{" "}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Jogeshwari west
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Pending
            </td>
            <td className="whitespace-nowrap px-4 py-2">
              <button
                onClick={openModal}
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Update
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <form className="w-[800px]">
                  <div className="flex flex-col gap-6">
                    <h3 className="font-semibold Text-2xl">
                      {" "}
                      Update this Complaint
                    </h3>
                    <div>
                      <div>
                        <label
                          htmlFor="HeadlineAct"
                          className="block text-sm font-medium text-gray-900"
                        >
                          {" "}
                          Status:{" "}
                        </label>

                        <select
                          name="HeadlineAct"
                          id="HeadlineAct"
                          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                        >
                          <option value="">Pending</option>
                          <option value="JM">Resolved</option>
                          <option value="SRV">Reopened</option>
                        </select>
                      </div>


                     
                    </div>
                    <div>
                        <label
                          htmlFor="Description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          {" "}
                          Description{" "}
                        </label>

                        <textarea
                          id="OrderNotes"
                          className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                          rows="4"
                          placeholder="Enter any additional order notes..."
                        ></textarea>
                      </div>
                      <button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        Update
                      </button>
                  </div>
                </form>
              </Modal>
            </td>
          </tr>

          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Gary Barlow
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              24/05/1995
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Singer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $20,000
            </td>
            <td className="whitespace-nowrap px-4 py-2">
              <a
                href="#"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                View
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewComplaints;
