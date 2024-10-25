import { useState } from 'react';
import { useInquiryStore } from '../../store/inquiryStore';
import { Inquiry } from '../../types';

export default function InquiryList() {
  const { inquiries, updateInquiryStatus } = useInquiryStore();
  const [statusFilter, setStatusFilter] = useState<Inquiry['status'] | 'all'>('all');

  const filteredInquiries = inquiries.filter(
    (inquiry) => statusFilter === 'all' || inquiry.status === statusFilter
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Inquiries</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all customer inquiries and their current status.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Inquiry['status'] | 'all')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="inProgress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Subject
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Message
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredInquiries.length === 0 ? (
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500" colSpan={5}>
                        No inquiries found
                      </td>
                    </tr>
                  ) : (
                    filteredInquiries.map((inquiry) => (
                      <tr key={inquiry.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {new Date(inquiry.createdAt).toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          {inquiry.subject}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          {inquiry.message}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              {
                                new: 'bg-yellow-100 text-yellow-800',
                                inProgress: 'bg-blue-100 text-blue-800',
                                resolved: 'bg-green-100 text-green-800',
                              }[inquiry.status]
                            }`}
                          >
                            {inquiry.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <select
                            value={inquiry.status}
                            onChange={(e) =>
                              updateInquiryStatus(inquiry.id, e.target.value as Inquiry['status'])
                            }
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="new">New</option>
                            <option value="inProgress">In Progress</option>
                            <option value="resolved">Resolved</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}