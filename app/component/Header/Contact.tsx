import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="xs:w-full  h-12 mt-[100px]ml-[100px] pr-16 pl-16 px-16 bg-[#F7F7F7] shadow border-b border-[#000000]">
      <div className="container flex items-center justify-between ml-12 h-full">
        {/* Contact Information */}
        <div className="content flex w-[440px] h-[20px] gap-4">
          <p className="font-roboto text-[14px] font-medium leading-[21px] text-left">
            Phone Number: 956 742 455 678
          </p>
          <div className="w-[2px] bg-[#676767]"></div>
          <p className="font-roboto text-[14px] font-medium leading-[21px] text-left">
            Email: info@ddsgnr.com
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="icons flex gap-4">
          <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 text-black" />
          <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-black" />
          <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 text-black" />
          <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
