import React from "react";

const Footur = () => {
  return (
    <div className="w-full">
      <footer
        className="text-white py-12 w-full"
        style={{ backgroundColor: "#0870F9" }} // Background color
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-8">
          {/* Left Section */}
          <div className="flex flex-col md:w-1/4 text-left">
            <h1 className="text-2xl font-semibold mb-3">Lead Gen Pro</h1>
            <p
              className="text-sm"
              style={{
                whiteSpace: "nowrap", // Prevent line wrapping
               // overflow: "hidden", // Hide any overflow
                textOverflow: "ellipsis", // Add ellipsis if the text overflows
              }}
            >
              LeadGenPro: Simplifying motor insurance while empowering you to
              earn.
            </p>

            <div className="flex space-x-4 mt-20">
              {/* Social Media Icons */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-x-10 text-right">
            {/* Pages Section */}
            <div className="md:w-auto">
              <h3 className="text-lg font-bold mb-2">Pages</h3>
              <ul>
                <li>
                  <a href="/policies" className="text-sm hover:underline">
                    Policies
                  </a>
                </li>
                <li>
                  <a href="/category" className="text-sm hover:underline">
                    Category
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="text-sm hover:underline">
                    About us
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Section */}
            <div className="md:w-auto">
              <h3 className="text-lg font-bold mb-2">Service</h3>
              <ul>
                <li>
                  <a href="/bike-insurance" className="text-sm hover:underline">
                    Bike insurance
                  </a>
                </li>
                <li>
                  <a href="/car-insurance" className="text-sm hover:underline">
                    Car insurance
                  </a>
                </li>
                <li>
                  <a
                    href="/commercial-insurance"
                    className="text-sm hover:underline"
                  >
                    Commercial vehicle <br></br>insurance
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="md:w-auto">
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <ul>
                <li>
                  <a href="tel:000-000-000" className="text-sm hover:underline">
                    <i className="fas fa-phone-alt mr-2 text-lg"></i>
                    000-000-000
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sudesh@example.com"
                    className="text-sm hover:underline"
                  >
                    <i className="fas fa-envelope mr-2 text-lg"></i>
                    sudesh@example.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=0000+Lörem+ipsum+St,+City,+Country"
                    className="text-sm hover:underline"
                  >
                    <i className="fas fa-map-marker-alt mr-2 text-lg"></i>
                    0000 Lörem ipsum od <br></br>ohet dilog 0000.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footur;
