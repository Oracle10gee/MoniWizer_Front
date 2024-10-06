import "./support.css";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Support = () => {
  return (
    <div className="font-poppins">
      <p className="text-[#011B33] font-semibold text-[28px]">Support</p>
      <p className="text-[#828282] font-sarabun text-sm mt-1">
        Reach out to us through the following
      </p>
      <div className="moni-setting-box">
        <div className="moni-setting-box bg-[#CADAE90D]">
          <div>
            <p className="text-[#011B33] font-semibold text-[20px]">Support</p>
            <p className="text-[#828282] font-sarabun text-sm mt-1">
              Reach out to us through the following
            </p>
          </div>

          <div className="mt-10">
            <p className="text-[#011B33] font-semibold text-[20px]">
              Send Us a Message
            </p>
            <p className="text-[#828282] font-sarabun text-sm mt-1">
              Message will be sent through your verified email
            </p>
          </div>
          <div className="mt-10">
            <div className="inp-label-container flex flex-col">
              <label className="label-text">Topic</label>
              <input type="text" className="inp-field" />
            </div>

            <div className="inp-label-container flex flex-col mt-5">
              <label className="label-text">Message</label>
              <textarea className="inp-field textarea-inp" />
            </div>

            <button className="send-btn">Send Message</button>
          </div>

          <div className="mt-10">
            <p className="text-[#011B33] font-semibold text-[20px]">
              Social Media
            </p>
            <p className="text-[#828282] font-sarabun text-sm mt-1">
              Engage our handle across the internet
            </p>

            <div className="social-icons-box flex gap-5 my-5 text-[30px]">
              <FaLinkedin className="text-[#0A66C2]" />
              <FaInstagram className="insta" />
              <FaFacebook className="text-[#1877F2]" />
              <FaXTwitter className="text-[#000]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
