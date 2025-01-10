import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footur";

export default function Cart() {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const toggleModal = () => {
    setShowInvoiceModal(!showInvoiceModal);
  };

  return (
    <> 
    <Header/>
    <section className="cart-area py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Product List */}
          <div className="w-full lg:w-8/12 px-4">
            <div className="product-list overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
              <table className="table-auto border border-gray-300 w-full">
                <thead>
                  <tr>
                    <td
                      colSpan="4"
                      className="text-red-600 text-center py-4 font-medium border-b border-gray-300"
                    >
                      Finally, you have selected your course. Now click on the
                      <strong> GENERATE INVOICE </strong> button to get your fee slip.
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <th className="p-3 text-left">Action</th>
                    <th className="p-3 text-left">Thumbnail</th>
                    <th className="p-3 text-left">Course</th>
                    <th className="p-3 text-left">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="p-3 text-center">
                      <a href="#!" className="text-red-600 hover:text-red-800">
                        <i className="las la-trash text-lg"></i>
                      </a>
                    </td>
                    <td className="p-3">
                      <a href="#!">
                        <img
                          src="https://aws.pftpedu.org/storage/courses/detail/webimg2.jpg"
                          alt="Front-end development"
                          className="w-16 h-16 object-cover rounded"
                        />
                      </a>
                    </td>
                    <td className="p-3">
                      <a
                        href="#!"
                        className="text-blue-500 hover:underline hover:text-blue-700 no-underline"
                      >
                        Front-end Development
                      </a>
                    </td>
                    <td className="p-3 text-gray-800">Rs: 2900</td>
                  </tr>
                </tbody>
              </table>

              {/* Actions */}
              <div className="actions flex justify-between mt-4">
                <form
                  action="#!"
                  className="flex items-center gap-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    className="form-input border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Promo code (optional)"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Check Promo
                  </button>
                </form>
                <a
                  href="/course-registration"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors no-underline"
                >
                  Update Cart
                </a>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-4/12 px-4 mt-8 lg:mt-0">
            <div className="cart-summary bg-white p-6 rounded-lg shadow-lg">
              <div className="cs-title text-center mb-4">
                <h5 className="text-2xl font-bold text-gray-700">Cart Summary</h5>
              </div>
              <div className="cs-content">
                <ul className="list-none mb-4">
                  <li className="flex justify-between py-2 text-gray-600">
                    <span>Sub Total</span>
                    <span>2900</span>
                  </li>
                  <li className="flex justify-between py-2 text-gray-600">
                    <span>Discount (0%)</span>
                    <span>0</span>
                  </li>
                </ul>
                <p className="cart-total flex justify-between text-lg font-bold border-t border-gray-300 pt-4 text-gray-700">
                  <span>Grand Total</span>
                  <span>2900</span>
                </p>
                <button
                  className="w-full py-3 bg-green-800 text-white rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2 mt-4"
                  onClick={toggleModal}
                >
                  <i className="las la-file-invoice text-xl"></i> Generate Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Modal */}
      {showInvoiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Invoice</h3>
            <p className="text-gray-600 mb-4">
              Your invoice has been successfully generated! Download or print
              your fee slip below.
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={toggleModal}
              >
                Close
              </button>
              <a
                href="/path-to-download"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                download
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
    <Footer/>
    </>
  );
}
