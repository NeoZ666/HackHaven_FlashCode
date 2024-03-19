import React from 'react'

function PendingComplaints() {
  return (
<div className="overflow-x-auto m-20">
  <h2 className='text-4xl font-bold text-center my-10'>Your complaints</h2>
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Decription of the Complaint</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Address</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Water logging</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">The gutters have been overflowing Since last week </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Jogeshwari west</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Pending</td>
      </tr>

    </tbody>
  </table>
</div>
  )
}

export default PendingComplaints