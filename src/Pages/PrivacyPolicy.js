import React, { useEffect } from "react";
import HeaderDemo from "../Components/Common/HeaderDemo";
import { Link } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import ScrollToTop from "../Components/Common/ScrollToTop";

const PrivacyPolicy = () => {
 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div>
    <div className="px-[15px] sm:px-[50px] lg:px-[80px]">
      <HeaderDemo />
      <div className="pt-[80px] text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[43px] text-center text-white font-poppins font-medium">
        {" "}
        Privacy policy{" "}
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal pt-[30px]">
        At DesignX, accessible from https://designx.in/, one of our main
        priorities is the privacy of our visitors. This Privacy Policy document
        contains types of information that is collected and recorded by DesignX
        and how we use it.
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in DesignX. This policy is not applicable to any
        information collected offline or via channels other than this website.{" "}
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        Consent
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        Information we collect
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        If you contact us directly, we may receive additional information about
        you such as your name, email address, phone number, the contents of the
        message and/or attachments you may send us, and any other information
        you may choose to provide.
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        When you register for an Account, we may ask for your contact
        information, including items such as name, company name, address, email
        address, and telephone number.
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        How we use your information
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        We use the information we collect in various ways, including to:
      </p>
      <ul className="list-disc text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the website, and for marketing and promotional
          purposes
        </li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        Log Files
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        DesignX follows a standard procedure of using log files. These files log
        visitors when they visit websites. All hosting companies do this and a
        part of hosting services’ analytics. The information collected by log
        files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking users’ movement on
        the website, and gathering demographic information.
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        Cookies and Web Beacons
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        Like any other website, DesignX uses ‘cookies’. These cookies are used
        to store information including visitors’ preferences, and the pages on
        the website that the visitor accessed or visited. The information is
        used to optimize the users’ experience by customizing our web page
        content based on visitors’ browser type and/or other information.
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        For more general information on cookies, please read{" "}
        <Link
          to="https://www.termsfeed.com/blog/cookies/"
          target="_blank"
          className="no-underline text-red-500"
        >
          “What Are Cookies” from Cookie Consent.
        </Link>
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        Advertising Partners Privacy Policies
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of <span className="font-semibold">DesignX</span>.
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on <span className="font-semibold">DesignX</span>, which are sent directly
        to users’ browser. They automatically receive your IP address when this
        occurs. These technologies are used to measure the effectiveness of
        their advertising campaigns and/or to personalize the advertising
        content that you see on websites that you visit.
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        Note that <span className="font-semibold">DesignX</span> has no access to or control over these cookies that
        are used by third-party advertisers.
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        Third Party Privacy Policies
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        DesignX’s Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers’ respective
        websites.
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        CCPA Privacy Rights (Do Not Sell My Personal Information)
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        Under the CCPA, among other rights, California consumers have the right
        to:
      </p>
      <ul className="list-disc text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        <li>
          Request that a business that collects a consumer’s personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </li>
        <li>
          Request that a business delete any personal data about the consumer
          that a business has collected.
        </li>
        <li>
          Request that a business that sells a consumer’s personal data, not
          sell the consumer’s personal data.
        </li>
        <li>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </li>
      </ul>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        GDPR Data Protection Rights
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        We would like to make sure you are fully aware of all of your data
        protection rights. Every user is entitled to the following:
      </p>
      <ul className="list-disc text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        <li>
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </li>
        <li>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </li>
        <li>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </li>
        <li>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </li>
        <li>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </li>
        <li>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </li>
      </ul>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us.
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        Children’s Information
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        DesignX does not knowingly collect any Personal Identifiable Information
        from children under the age of 13. If you think that your child provided
        this kind of information on our website, we strongly encourage you to
        contact us immediately and we will do our best efforts to promptly
        remove such information from our records
      </p>
      <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-poppins font-medium">
        Delete App Account
      </div>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        User can request their app account to be deleted using below step.
      </p>
      <ul className="list-disc text-[14px] sm:text-[16px] lg:text-[18px] text-[#C8C8C8] font-normal">
        <li>Step 1 : Login into account</li>
        <li>Step 2 : Click on hamburger menu icon</li>
        <li>Step 3 : Click on “Settings” from left side menu</li>
        <li>Step 4 : Click “Delete Account” button from the screen</li>
        <li>Step 5 : Click “Yes” if you want your account to be deleted</li>
      </ul>
      <br />
      <br />
    </div>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
};

export default PrivacyPolicy;
