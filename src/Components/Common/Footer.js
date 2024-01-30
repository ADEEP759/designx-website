import React from "react";
import "../Assets/CSS/Footer.css";
import linkedin from "../Assets/Images/linkedinIcon.svg";
import logo from "../Assets/Images/designXlogo.svg";
import isms from '../Assets/Images/isms.png'
import ssl from '../Assets/Images/SSL-Secure-Connection.png'
import email from '../Assets/Images/emailIcon.svg'
import phone from '../Assets/Images/phoneIcon.svg'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerBack font-poppins text-white pt-[60px] px-[28px] lg:px-[78px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Product</p>
            <Link to="/Product" className=" no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]" style={{transition:"color 0.3s"}}>
                DFOS
              </p>
            </Link>
            <ul className="">
            <li>
            <Link to="/IOTGateway" className=" no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]" style={{transition:"color 0.3s"}}>
                IOT
              </p>
            </Link>
            </li>
            <li>
            <Link to="/DigitalTwin" className="no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]" style={{transition:"color 0.3s"}}>
                Digital Twin
              </p>
            </Link>
            </li>
            <li>
            <Link to="/ESG" className=" no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]" style={{transition:"color 0.3s"}}>
                ESG
              </p>
            </Link>
            </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Company</p>
            <Link to="/Aboutus" className="no-underline text-white">
              {" "}
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]" style={{transition:"color 0.3s"}}>
                About Us
              </p>{" "}
            </Link>
            <Link to="/Blogs" className=" no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]" style={{transition:"color 0.3s"}}>
                Blogs
              </p>
            </Link>
            <Link to="/PrivacyPolicy" className="no-underline text-white">
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]" style={{transition:"color 0.3s"}}>
                Privacy Policy
              </p>
            </Link>
            {/* <p className="font-light text-[12px] sm:text-[16px]">Case Study</p> */}
            {/* <p className="font-light text-[12px] sm:text-[16px]">Newsletter</p> */}
            <Link to="/Contact" className="no-underline text-white">
              {" "}
              <p className="font-light hover:text-[#0046FF] text-[12px] sm:text-[16px]" style={{transition:"color 0.3s"}}>
                Contact Us
              </p>{" "}
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Contact </p>
            <p className="font-light text-[12px] sm:text-[16px] flex items-center">
             <span> <img src={email} alt="" /></span> &nbsp; &nbsp; 
              <Link to="mailto:info@designx.in" className="email_link">
                {" "}
              info@designx.in
              </Link>
            </p>
            <p className="font-light text-[12px] sm:text-[16px] flex items-center">
             <img src={phone} alt="" />&nbsp; &nbsp; 
             <Link to="tel:9045012061" className="email_link">9045012061</Link>,{" "}
             &nbsp;
             <Link to="tel:8126084680" className="email_link">8126084680</Link>
            </p>
          </div>
          <br />
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
              3C-1, Block C, <br /> Research & Innovation Park, IIT Delhi, New Delhi
              110016
            </p>
            <br />

            <div>
            <p className="text-[16px] sm:text-[20px] font-medium">Connect with us</p>
            <p className="flex justify-center w-[50%]">
              <Link
                to="https://www.linkedin.com/company/nrv-designx/"
                target="_blank"
              >
                <img src={linkedin} alt="" className="w-[45px] h-[45px]" />{" "}
              </Link>
            </p>
            </div>
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
