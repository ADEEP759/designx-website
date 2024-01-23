import React from "react";
import "../Assets/CSS/Footer.css";
import facebook from "../Assets/Images/faceBookIcon.svg";
import linkedin from "../Assets/Images/linkedinIcon.svg";
import logo from "../Assets/Images/designXlogo.svg";
import isms from '../Assets/Images/isms.png'
import ssl from '../Assets/Images/SSL-Secure-Connection.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerBack font-poppins text-white pt-[60px] px-[28px] lg:px-[78px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Platform</p>
            <Link to="/Product" className="no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">
                DFOS
              </p>
            </Link>
            {/* <Link to="/Product" className="no-underline text-white"><p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">Digital Process</p></Link> */}
            <Link to="/IIOT" className="no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">
                IIOT
              </p>
            </Link>
            <Link to="/DigitalTwin" className="no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">
                Digital Twin
              </p>
            </Link>
            {/* <Link to="/Product" className="no-underline text-white"><p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">Computer vision</p></Link> */}
            <Link to="/ESG" className="no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">
                ESG
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Company</p>
            <Link to="/Aboutus" className="no-underline text-white">
              {" "}
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">
                About Us
              </p>{" "}
            </Link>
            <Link to="/Blogs" className="no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">
                Blogs
              </p>
            </Link>
            <Link to="/PrivacyPolicy" className="no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">
                Privacy Policy
              </p>
            </Link>
            {/* <p className="font-light text-[12px] sm:text-[16px]">Case Study</p> */}
            {/* <p className="font-light text-[12px] sm:text-[16px]">Newsletter</p> */}
            <Link to="/Contact" className="no-underline text-white">
              {" "}
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]">
                Contact Us
              </p>{" "}
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Contact </p>
            <p className="font-light text-[12px] sm:text-[16px]">
              Email:{" "}
              <Link to="mailto:info@designx.in" className="email_link">
                {" "}
                info@designx.in
              </Link>
            </p>
            <p className="font-light text-[12px] sm:text-[16px]">
              Phone: <Link to="tel:9045012061" className="email_link">9045012061</Link>,{" "}
              <Link to="tel:8126084680" className="email_link">8126084680</Link>
            </p>
          </div>
          <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Certifications</p>
            <p className="block sm:flex">
              <img src={isms} alt="" className="w-[50px] h-[50px] mr-[10px]" />
              <img src={ssl} alt="" className="w-[75px] h-[50px] mt-[5px] sm:mt-[0px] ml-[0px] sm:ml-[10px]" />
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Address </p>
            <p className="font-light text-[12px] sm:text-[16px]">
              3C-1, Block C, Research & Innovation Park, IIT Delhi, New Delhi
              110016
            </p>
            <br />
            <br />
            <br />
            <br />
            <p className="flex">
              <Link to="https://www.facebook.com/designx.in" target="_blank">
                {" "}
                <img src={facebook} alt="" className="mr-[16px]" />{" "}
              </Link>
              <Link
                to="https://www.linkedin.com/company/nrv-designx/"
                target="_blank"
              >
                <img src={linkedin} alt="" className="ml-[16px]" />{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <hr className="border-[1px] border-solid border-white" />
      <div className="flex justify-center lg:justify-between items-center">
        <p className="text-[14px] lg:text-[18px] py-[30px] mb-0">
          Copyright © 2021 NRV Designx Pvt. Ltd.
        </p>
        <img src={logo} alt="" className="hidden lg:block w-auto h-8" />
      </div>
    </div>
  );
};

export default Footer;
