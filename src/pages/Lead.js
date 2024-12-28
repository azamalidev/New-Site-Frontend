import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import Footur from "../components/footur";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Lead = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      title: "Toyota Corolla",
      status: "Request Sent → Quotation Made",
      make: "December 2022",
      submitted: "2 days ago",
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share.",
      registerNumber: "MH-12-3456",
      additionalInfo: "Pay For Quotation → ",
    },
    {
      id: 2,
      title: "Honda 70, SG",
      status: "Request Sent → Quotation Made → Payment Done → Policy Uploaded",
      make: "December 2024",
      submitted: "1 day ago",
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share.",
      registerNumber: "SG-Honda-3503",
      additionalInfo: "Download Insurance Policy ",
      activityPoints: 200,
    },
    {
      id: 3,
      title: "Honda, H-Series",
      status: "Request Sent",
      make: "December 2022",
      submitted: "2 days ago",
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share.",
      registerNumber: "H-3503",
      alert: "Admin left a comment on this request. Please view this...",
    },
    {
      id: 4,
      title: "Yama Fog, FG",
      status: "Policy Uploaded",
      make: "December 2024",
      submitted: "2 months ago",
      message:
        "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share.",
      registerNumber: "FG-89786503",
      activityPointsSent: 200,
    },
  ]);

  const [editingLead, setEditingLead] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  const handleEdit = (lead) => {
    setEditingLead(lead);
  };

  const handleSaveEdit = () => {
    setLeads(
      leads.map((lead) =>
        lead.id === editingLead.id ? editingLead : lead
      )
    );
    setEditingLead(null);
  };

  const goToQuotationMade = () => {
    navigate("/quotation-made");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-8 py-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Lead Gen Pro Request
        </h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            All
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md"
            onClick={goToQuotationMade}
          >
            Quotation Made
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">
            Payment Done
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white shadow-md rounded-lg p-6 relative"
            >
              {/* Card Content */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-black">
                  {lead.title}
                </h2>
                <span className="text-sm bg-gray-700 text-white px-2 py-1 rounded-md mt-8 mr-24">
  Make: {lead.make}
</span>

              </div>
              <p className="text-sm text-gray-600 mt-2 text-right">
  Submitted: {lead.submitted}
</p>

              <p className="mt-2">
  <span className="text-blue-600 font-medium">Status:</span>{" "}
  <span className="text-green-600 ">
    {lead.status}
  </span>
</p>

              <p className="text-gray-700 mt-4">{lead.message}</p>
              <p className="mt-4 text-gray-800 font-semibold">
                Register Number: {lead.registerNumber}
              </p>
              {lead.alert && (
                <p className="mt-4 text-red-500">
                  Alert: {lead.alert}
                </p>
              )}
    {lead.activityPoints && (
  <p
    className="mt-2 inline-block px-2 py-1 bg-red-200 text-red-900 rounded"
  >
    Activity Point Pending: {lead.activityPoints}
  </p>
)}


              {lead.activityPointsSent && (
                <p className="mt-2 inline-block px-2 py-1 bg-green-200 text-green-900 rounded">
                  Activity Point Sent: {lead.activityPointsSent}
                </p>
              )}
              {lead.additionalInfo && (
                <p className="mt-2 text-blue-900">{lead.additionalInfo}</p>
              )}

              {/* Edit and Delete Icons */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(lead)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(lead.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingLead && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Edit Lead</h2>
            <label className="block mb-2">
              Title:
              <input
                type="text"
                value={editingLead.title}
                onChange={(e) =>
                  setEditingLead({
                    ...editingLead,
                    title: e.target.value,
                  })
                }
                className="block w-full mt-1 p-2 border rounded-md"
              />
            </label>
            <label className="block mb-2">
              Message:
              <textarea
                value={editingLead.message}
                onChange={(e) =>
                  setEditingLead({
                    ...editingLead,
                    message: e.target.value,
                  })
                }
                className="block w-full mt-1 p-2 border rounded-md"
              />
            </label>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setEditingLead(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footur />
    </div>
  );
};

export default Lead;
