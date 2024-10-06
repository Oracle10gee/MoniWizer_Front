import { FaIdCard } from "react-icons/fa6";
import {
  IoMdPhonePortrait,
  IoIosCheckmarkCircle,
  IoMdAdd,
} from "react-icons/io";
import { IoLanguageSharp } from "react-icons/io5";
import {
  MdOutlineDevices,
  MdOutlineDesktopWindows,
  MdOutlineDeleteForever,
} from "react-icons/md";
import "./setting.css";
import DashboardModal from "components/Modal/Modal";
import DebitLinkModal from "pages/Accounts/debtLinkModal";
import useDisclosure from "hooks/useDisclosure";
import SentSuccess from "./sentSucess";
const Setting = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: "/images/visa.png",
      cardNumber: "**** **** **** 5634",
      bankName: "FCMB",
    },
    {
      id: 2,
      imgSrc: "/images/master.png",
      cardNumber: "**** **** **** 7603",
      bankName: "First Bank",
    },
    // {
    //   id: 3,
    //   imgSrc: "/images/master.png",
    //   cardNumber: "**** **** **** 2354",
    //   bankName: "UBA",
    // },
    // {
    //   id: 4,
    //   imgSrc: "/images/visa.png",
    //   cardNumber: "**** **** **** 5634",
    //   bankName: "FCMB",
    // },
  ];

  const {
    isOpen: openDebitLinkModal,
    open: onOpenDebitLinkModal,
    close: closeDebitLinkModal,
  } = useDisclosure();

  return (
    <div className="font-poppins">
      <p className="text-[#011B33] font-semibold text-[28px]">Settings</p>
      <p className="text-[#828282] font-sarabun text-sm mt-1">
        Get to know how the app works.
      </p>
      <div className="moni-setting-box">
        <div>
          <p className="text-[#011B33] font-semibold text-[28px]">
            Moniwizr Settings
          </p>
          <p className="text-[#828282] font-sarabun text-sm mt-1">
            Take a look at your Moniwizr Account.
          </p>
        </div>
        <div className="cont-info flex gap-3 mt-10">
          <div className="call-icon-bx">
            <IoMdPhonePortrait />
          </div>
          <div className="contact-ver-box">
            <div className="contact-verification text-[#011B33] font-bold">
              Contact verification
            </div>
            <div className="cont-ver-bdd text-[#667185] ">
              Manage your contact verification methods
            </div>
          </div>
        </div>
        <div className="contact-box-num ">
          <div className="inner-cont flex justify-between flex-wrap">
            <div className="contact-ver-box">
              <div className="contact-verification text-[#011B33] font-bold">
                Phone Number
              </div>
              <div className="cont-ver-bdd text-[#667185] ">
                This is the number you signed up with on Moniwizr
              </div>
            </div>
            <div className="input-container">
              <div className="input-code">
                <input
                  type="tel"
                  className="num-inp"
                  placeholder="09012345678"
                />
                <button className="set-btn" onClick={onOpenDebitLinkModal}>
                  Send Code
                </button>
              </div>
              <div className="success-verified flex items-center gap-2">
                <IoIosCheckmarkCircle />
                <div className="verified-text">Verified</div>
              </div>
            </div>
            <div className="input-container">
              <div className="input-code">
                <input
                  type="tel"
                  className="num-inp"
                  placeholder="Input  code"
                />
                <button className="set-btn">Verify</button>
              </div>
              <div className="success-verified flex items-center gap-2">
                <IoIosCheckmarkCircle />
                <div className="verified-text">Code Accepted</div>
              </div>
            </div>
          </div>
          <div className="inner-cont  mt-5">
            <div className="w-[64%] flex justify-between">
              <div className="contact-ver-box">
                <div className="contact-verification text-[#011B33] font-bold">
                  Email
                </div>
                <div className="cont-ver-bdd text-[#667185] ">
                  This is the email you signed up with on Moniwizr
                </div>
              </div>
              <div className="">
                <div className="input-code ">
                  <input
                    type="tel"
                    className="num-inp w-full"
                    placeholder="RebeccaUduk@gmail.com"
                  />
                </div>
                <div className="success-verified flex items-center gap-2">
                  <IoIosCheckmarkCircle />
                  <div className="verified-text">Verified</div>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="devices-box">
          <div className="cont-info flex gap-3 mt-10">
            <div className="call-icon-bx">
              <MdOutlineDevices />
            </div>
            <div className="contact-ver-box">
              <div className="contact-verification text-[#011B33] font-bold">
                Devices
              </div>
              <div className="cont-ver-bdd text-[#667185] ">
                Manage the devices connected to your account.
              </div>
            </div>
          </div>
          <div className="devices-list-main my-5 w-[65%]">
            <div className="devices-list-box flex justify-between">
              <div className="device-title-bx flex items-center gap-2">
                <MdOutlineDesktopWindows className="text-[#101928]" />
                <div className="name-type-inner">
                  <div className="name-device">MacBook Pro M1</div>
                  <div className="device-type">Desktop</div>
                </div>
              </div>
              <div className="name-type-device">
                <div className="name-device">6 Feb, 2024</div>
                <div className="device-type">Date Added</div>
              </div>
              <div className="name-type-device">
                <div className="name-device">191.212.56.096</div>
                <div className="device-type">Lagos, Nigeria</div>
              </div>
              <button className="set-btn">Remove</button>
            </div>
            <div className="devices-list-box flex justify-between">
              <div className="device-title-bx flex items-center gap-2">
                <IoMdPhonePortrait className="text-[#101928]" />
                <div className="name-type-inner">
                  <div className="name-device">Iphone 11</div>
                  <div className="device-type">Mobile</div>
                </div>
              </div>
              <div className="name-type-device">
                <div className="name-device">12 Feb, 2024</div>
                <div className="device-type">Date Added</div>
              </div>
              <div className="name-type-device">
                <div className="name-device">191.212.20.056</div>
                <div className="device-type">Lagos, Nigeria</div>
              </div>
              <button className="set-btn">Remove</button>
            </div>
          </div>
        </div>
        <div className="lang-select-box flex gap-4 items-end ">
          <div className="cont-info flex gap-3 mt-10">
            <div className="call-icon-bx">
              <IoLanguageSharp />
            </div>
            <div className="contact-ver-box">
              <div className="contact-verification text-[#011B33] font-bold">
                Language
              </div>
              <div className="cont-ver-bdd text-[#667185] ">
                Choose your preferred language
              </div>
            </div>
          </div>
          <select className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2">
            <option value="English">English</option>
          </select>
        </div>

        <div className="fund-box">
          <div className="cont-info flex gap-3 mt-10">
            <div className="call-icon-bx">
              <FaIdCard />
            </div>
            <div className="contact-ver-box">
              <div className="contact-verification text-[#011B33] font-bold">
                Funding Source
              </div>
              <div className="cont-ver-bdd text-[#667185] ">
                This is the list of your cards
              </div>
            </div>
          </div>
          <div className="fund-main-bx ">
            <div className="flex justify-between ver-flow">
              <div className="main-card-fund flex justify-center items-center">
                <div className="add-card">
                  <div className="add-card-icon">
                    <IoMdAdd />
                  </div>
                  <div className="add-text">Add Card</div>
                </div>
              </div>
              {cardData.map((card) => (
                <div className="main-card-fund" key={card.id}>
                  <img src={card.imgSrc} alt={card.bankName} />

                  <div className="card-num-text text-[#383F51] font-bold my-5">
                    {card.cardNumber}
                  </div>
                  <div className="bank-name-remove flex justify-between">
                    <div className="bank-name">{card.bankName}</div>
                    <div className="remove-card flex">
                      <div className="rem-icon">
                        <MdOutlineDeleteForever />
                      </div>
                      <div className="rem-text">Remove Card</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DashboardModal
          open={openDebitLinkModal}
          onClose={closeDebitLinkModal}
          width={"531px"}
        >
          <SentSuccess onCancel={closeDebitLinkModal} />
        </DashboardModal>
      </div>
    </div>
  );
};

export default Setting;
