import {
  EyeOpen,
  EyeSlash,
  GalleryIcon,
  GrayLockIcon,
  LockIcon,
} from "assets/icons/svgs";
import { PasswordField } from "auth/CreateAccount/types";
import Button from "components/Button/Button";
import DashboardDrawer from "components/Drawer/Drawer";
import Field from "components/Form/Field";
import Input from "components/Form/Input/Input";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const NavProfile = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const checkIcon = (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 12.5C9.31371 12.5 12 9.81371 12 6.5C12 3.18629 9.31371 0.5 6 0.5C2.68629 0.5 0 3.18629 0 6.5C0 9.81371 2.68629 12.5 6 12.5ZM8.45027 5.6583C8.72179 5.40962 8.74031 4.98792 8.49163 4.7164C8.24296 4.44488 7.82125 4.42636 7.54973 4.67503L5.08835 6.92932L4.45027 6.34492C4.17875 6.09625 3.75704 6.11477 3.50837 6.38629C3.25969 6.65781 3.27821 7.07951 3.54973 7.32819L4.63808 8.32497C4.8929 8.55834 5.2838 8.55834 5.53862 8.32497L8.45027 5.6583Z"
        fill="#0F973D"
      />
    </svg>
  );

  const fileUploadIcon = (
    <svg
      width="56"
      height="57"
      viewBox="0 0 56 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28.5" r="28" fill="#E0E0E0" />
      <path
        d="M21.0003 25.584C21.0003 22.0402 23.8732 19.1673 27.417 19.1673C30.5562 19.1673 33.171 21.4227 33.7252 24.4018C33.8029 24.8195 34.1016 25.162 34.5049 25.2958C36.8275 26.0661 38.5003 28.2562 38.5003 30.834C38.5003 34.0556 35.8887 36.6673 32.667 36.6673C32.0227 36.6673 31.5003 37.1897 31.5003 37.834C31.5003 38.4783 32.0227 39.0007 32.667 39.0007C37.1773 39.0007 40.8337 35.3443 40.8337 30.834C40.8337 27.4594 38.7876 24.5655 35.871 23.3202C34.873 19.585 31.4674 16.834 27.417 16.834C22.5845 16.834 18.667 20.7515 18.667 25.584C18.667 25.701 18.6693 25.8175 18.6739 25.9335C16.5792 27.1419 15.167 29.4053 15.167 32.0007C15.167 35.8666 18.301 39.0007 22.167 39.0007C22.8113 39.0007 23.3337 38.4783 23.3337 37.834C23.3337 37.1897 22.8113 36.6673 22.167 36.6673C19.5897 36.6673 17.5003 34.578 17.5003 32.0007C17.5003 30.0671 18.6765 28.4055 20.3571 27.6976C20.8434 27.4928 21.1316 26.987 21.0601 26.4642C21.0207 26.177 21.0003 25.8832 21.0003 25.584Z"
        fill="#4F4F4F"
      />
      <path
        d="M27.2252 31.1287C27.6673 30.7358 28.3334 30.7358 28.7754 31.1287L30.5254 32.6842C31.007 33.1123 31.0504 33.8497 30.6223 34.3313C30.2478 34.7526 29.6366 34.8385 29.167 34.5668V40.1673C29.167 40.8117 28.6447 41.334 28.0003 41.334C27.356 41.334 26.8337 40.8117 26.8337 40.1673V34.5668C26.3641 34.8385 25.7528 34.7526 25.3783 34.3313C24.9503 33.8497 24.9937 33.1123 25.4752 32.6842L27.2252 31.1287Z"
        fill="#4F4F4F"
      />
    </svg>
  );

  const errorIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.205446 8.78511L4.41289 0.936372C5.08216 -0.312123 6.91784 -0.312125 7.58711 0.93637L11.7946 8.78511C12.4164 9.94507 11.5517 11.3333 10.2074 11.3333H1.79256C0.448283 11.3333 -0.416371 9.94507 0.205446 8.78511ZM6 2C6.36819 2 6.66667 2.29848 6.66667 2.66667V7.33333C6.66667 7.70152 6.36819 8 6 8C5.63181 8 5.33333 7.70152 5.33333 7.33333V2.66667C5.33333 2.29848 5.63181 2 6 2ZM5.16667 9.16667C5.16667 9.6269 5.53976 10 6 10C6.46024 10 6.83333 9.6269 6.83333 9.16667C6.83333 8.70643 6.46024 8.33333 6 8.33333C5.53976 8.33333 5.16667 8.70643 5.16667 9.16667Z"
        fill="#EB5757"
      />
    </svg>
  );

  const warningIcon = (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.99629 1.74852C7.6169 1.38851 8.38279 1.38851 9.00339 1.74852L11.1715 3.00622L13.3448 4.25501C13.9668 4.61247 14.3498 5.27575 14.3483 5.99321L14.3432 8.49971L14.3483 11.0062C14.3498 11.7237 13.9668 12.3869 13.3448 12.7444L11.1715 13.9932L9.00339 15.2509C8.38279 15.6109 7.6169 15.6109 6.99629 15.2509L4.82818 13.9932L2.65492 12.7444C2.03285 12.3869 1.6499 11.7237 1.65137 11.0062L1.65651 8.49971L1.65137 5.99321C1.6499 5.27575 2.03285 4.61247 2.65492 4.25501L4.82818 3.00622L6.99629 1.74852ZM7.99984 4.49971C8.36803 4.49971 8.66651 4.79818 8.66651 5.16637V9.83304C8.66651 10.2012 8.36803 10.4997 7.99984 10.4997C7.63165 10.4997 7.33318 10.2012 7.33318 9.83304V5.16637C7.33318 4.79818 7.63166 4.49971 7.99984 4.49971ZM7.16651 11.6664C7.16651 12.1266 7.53961 12.4997 7.99984 12.4997C8.46008 12.4997 8.83318 12.1266 8.83318 11.6664C8.83318 11.2061 8.46008 10.833 7.99984 10.833C7.53961 10.833 7.16651 11.2061 7.16651 11.6664Z"
        fill="#F2C94C"
      />
    </svg>
  );

  const passwordValidationMessage = `
    Must have 8 characters.
    Must include capital and small letters.
    Must include one number/special character.
  `;

  const personalInfoValidationSchema = yup.object({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email_address: yup
      .string()
      .email("Enter a valid email address")
      .required("Email address is required"),
    home_address: yup.string().required("Home address is required"),
    user_name: yup.string().required("Username is required"),
    current_password: yup.string().required("Current Password is required"),
    new_password: yup
      .string()
      .required("Password is required")
      .test("password-validation", passwordValidationMessage, (value) => {
        if (!value) return false;
        const hasMinLength = value.length >= 8;
        const hasLowercase = /[a-z]/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasNumberOrSpecialChar =
          /[0-9]/.test(value) || /[@$!%*?&]/.test(value);
        return (
          hasMinLength && hasLowercase && hasUppercase && hasNumberOrSpecialChar
        );
      }),
    kyc_first_name: yup.string().required("First name is required"),
    kyc_last_name: yup.string().required("Last name is required"),
    bvn: yup
      .string()
      .required("BVN is required")
      .matches(/^[0-9]{11}$/, "BVN must be exactly 11 digits long"),
    nin: yup
      .string()
      .required("BVN is required")
      .matches(/^[0-9]{11}$/, "NIN must be exactly 11 digits long"),
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const { password, confirmPassword } = showPassword;

  const handleShowPassword = (param: PasswordField) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [param]: !prevState[param],
    }));
  };

  const handleSubmit = () => {
    console.log({ ...formik.values });
  };

  const personalInfoInitialValues = {
    first_name: "",
    last_name: "",
    email_address: "hassanadefarati@gmail.com",
    home_address: "",
    user_name: "",
    current_password: "",
    new_password: "",
    kyc_first_name: "",
    kyc_last_name: "",
    bvn: "",
    nin: "",
  };

  const formik = useFormik({
    initialValues: personalInfoInitialValues,
    validationSchema: personalInfoValidationSchema,
    onSubmit: handleSubmit,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | undefined>("");

  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBvnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      formik.setFieldValue("bvn", value);
    }
  };

  const handleNINChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      formik.setFieldValue("nin", value);
    }
  };

  const handleFileUploadChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const validFileTypes = [
        "image/svg+xml",
        "image/png",
        "image/jpeg",
        "image/gif",
      ];
      const isValidType = validFileTypes.includes(selectedFile.type);

      if (!isValidType) {
        alert("Please upload a valid image file (SVG, PNG, JPG, or GIF).");
        setFileUpload(null);
        setFileName("");
        return;
      }

      setFileUpload(selectedFile);
      setFileName(selectedFile.name);
    } else {
      setFileUpload(null);
      setFileName("");
    }
  };

  const headClass = "text-[#101928] font-semibold text-base font-poppins";
  const subTextClass = "text-[#667185]  text-xs font-base font-poppins";

  const labelClassName =
    "!text-[#101928] !font-poppins !font-medium !text-[14px]";

  return (
    <DashboardDrawer className="w-[1165px]" open={open} onClose={onClose}>
      <form onSubmit={formik.handleSubmit} className="pl-[60px] py-16">
        {/*-------- MY PROFILE WRAP START -------*/}
        <div>
          <p className="text-[#101928] font-semibold text-[28px]">My Profile</p>
          <p className="text-xs text-[#667185] font-base font-sarabun">
            Take a look at your Moniwizr profile.
          </p>
        </div>
        {/*-------- MY PROFILE WRAP END-------- */}

        {/* --------PROFILE PHOT0 WRAP START --------  */}
        <div className="w-full pb-[60px] border-b">
          <div className="mt-[60px] flex justify-between w-[650px]">
            <div>
              <p className="text-[#101928] font-semibold text-base">
                Profile photo
              </p>
              <p className="text-[#667185]  text-xs font-base">
                Use actual human photo, this <br /> helps us veify your
                identity.
              </p>
            </div>
            {/* <div> */}
            <div className="flex gap-3 items-center">
              <img
                src={
                  preview
                    ? preview
                    : "https://chrisanatex.com/storage/251/Passport_photo.jpeg"
                }
                alt="profile image"
                className="rounded-full h-[100px] w-[100px]"
              />
              <div className="flex flex-col gap-2 w-[200px]">
                <label
                  htmlFor="file"
                  className="border-2 rounded-[8px] w-[164px] cursor-pointer border-[#011B33] p-3 flex gap-2 items-center"
                >
                  <img src={GalleryIcon} alt="gallery" />
                  <span className="text-[14px] text-[#011B33] font-semibold font-poppins">
                    Change Photo
                  </span>
                </label>
                <input
                  id="file"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <p className="text-xs text-[#667185] font-base font-sarabun">
                  This image will be displayed on your profile
                </p>
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>
        {/* --------PROFILE PHOT0 WRAP END --------  */}

        {/* ---------PERSONAL INFO WRAP START--------- */}
        <div
          className="mt-8 pr-32 "
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
          }}
        >
          <div>
            <p className={headClass}>Personal Information</p>
            <p className={subTextClass}>Update your personal details here.</p>
          </div>

          {/* ------- PERSONAL INFO FORM DISPLAY-------- */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-5">
              <Field
                label="First name"
                type="text"
                name="first_name"
                onChange={formik.handleChange}
                placeholder="Enter first name"
                value={formik.values.first_name}
                labelClass={labelClassName}
              />
              <Field
                label="Last name"
                type="text"
                name="last_name"
                onChange={formik.handleChange}
                placeholder="Enter last name"
                value={formik.values.last_name}
                labelClass={labelClassName}
              />
            </div>
            <Field
              label="Email address"
              type="text"
              name="email_address"
              onChange={formik.handleChange}
              placeholder="Enter email name"
              className="!bg-[#E0E0E0] !text-[#828282] cursor-not-allowed"
              value={formik.values.email_address}
              disabled
              labelClass={labelClassName}
            />
            <Field
              label="Home Address"
              type="text"
              name="home_address"
              onChange={formik.handleChange}
              placeholder="Enter home address"
              value={formik.values.home_address}
              labelClass={labelClassName}
            />
            <div>
              <Field
                label="Username"
                type="text"
                name="username"
                onChange={formik.handleChange}
                placeholder="Enter username"
                value={formik.values.user_name}
                labelClass={labelClassName}
              />
              <div className="flex gap-2 items-center mt-3 bg-[#E7F6EC] p-2 px-3 rounded-[12px] w-[210px]">
                <figure>{checkIcon}</figure>
                <p className="text-[#0F973D] text-xs font-medium font-poppins">
                  This username is available
                </p>
              </div>
            </div>
          </div>
          {/* ------- PERSONAL INFOR FORM DISPLAY-------- */}
        </div>
        {/* ---------PERSONAL INFO WRAP END--------- */}

        {/* --------PASSWORD WRAP START ------- */}
        <div
          className="mt-8 pr-32 border-b pb-5"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
          }}
        >
          <div>
            <p className={headClass}>Update Password</p>
            <p className={subTextClass}>
              Enter your current password to make update
            </p>
          </div>

          {/* -------- PASSWORD FORM DISPLAY START ------ */}
          <div className="flex flex-col gap-8">
            <Field
              label="Current Password"
              type={password ? "text" : "password"}
              name="current_password"
              onChange={formik.handleChange}
              placeholder="Enter current password"
              value={formik.values.current_password}
              labelClass={labelClassName}
              icon={password ? EyeOpen : EyeSlash}
              isClickableIcon
              leftIcon={GrayLockIcon}
              onClickIcon={() => handleShowPassword("password")}
              className="pl-10"
            />
            <Field
              label="New Password"
              type={confirmPassword ? "text" : "password"}
              name="new_password"
              onChange={formik.handleChange}
              placeholder="Enter new password"
              value={formik.values.new_password}
              labelClass={labelClassName}
              icon={confirmPassword ? EyeOpen : EyeSlash}
              isClickableIcon
              leftIcon={GrayLockIcon}
              onClickIcon={() => handleShowPassword("confirmPassword")}
              className="pl-10"
            />
          </div>
          {/* -------- PASSWORD FORM DISPLAY END ------ */}

          {/* ------- BUTTON WRAP ----- */}
          <Button
            label="Save Changes"
            btnType="submit"
            className="mt-10 !bg-[#D0D5DD] !font-poppins !w-[200px] !cursor-not-allowed"
          />
        </div>

        {/* --------PASSWORD WRAP END ------- */}

        {/* ---------KYC INFO WRAP START--------- */}
        <div
          className="mt-8 pr-32"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
          }}
        >
          <div>
            <p className={headClass}>KYC Information</p>
            <p className={subTextClass}>Update your personal details here.</p>
          </div>

          {/* ------- KYC INFO FORM DISPLAY-------- */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-5">
              <Field
                label="First name"
                type="text"
                name="kyc_first_name"
                onChange={formik.handleChange}
                placeholder="Enter first name"
                value={formik.values.kyc_first_name}
                labelClass={labelClassName}
              />
              <Field
                label="Last name"
                type="text"
                name="kyc_last_name"
                onChange={formik.handleChange}
                placeholder="Enter last name"
                value={formik.values.kyc_last_name}
                labelClass={labelClassName}
              />
            </div>
            <Field
              label="B V N"
              type="text"
              name="bvn"
              onChange={handleBvnChange}
              placeholder="Enter BVN"
              value={formik.values.bvn}
              labelClass={labelClassName}
            />
            <Field
              label="N I N"
              type="text"
              name="nin"
              onChange={handleNINChange}
              placeholder="Enter NIN"
              value={formik.values.nin}
              labelClass={labelClassName}
            />

            <div className="border border-[#D0D5DD] p-4 rounded-[8px]">
              <p className="font-medium text-sm text-[#011B33]">
                Upload identity.
              </p>
              <div className="flex flex-col justify-center items-center gap-3 bg-[#F2F2F2] rounded-[16px] mx-[5rem] py-8 mt-5">
                <figure>{fileUploadIcon}</figure>
                <div>
                  <p className="">
                    <label
                      htmlFor="file_upload"
                      className="text-[#011B33] font-semibold text-sm font-poppins cursor-pointer"
                    >
                      Click to upload{" "}
                    </label>
                    <span className="text-[#4F4F4F] font-normal font-poppins text-sm">
                      or drag and drop
                    </span>{" "}
                    <br />
                    <span className="text-[#828282] font-normal font-sarabun text-sm">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </span>
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="bg-[#E0E0E0] h-[1px] w-[150px]"></span>
                  <p className="text-[#828282] font-semibold text-xs">OR</p>
                  <span className="bg-[#E0E0E0] h-[1px] w-[150px]"></span>
                </div>
                <input
                  id="file_upload"
                  type="file"
                  accept=".svg, .png, .jpg, .jpeg, .gif"
                  className="hidden"
                  onChange={handleFileUploadChange}
                />
                <label htmlFor="file_upload">
                  <div className="`w-fullp px-5 outline-none p-3 mt-4 bg-[#011B33] cursor-pointer flex justify-center rounded-lg">
                    <p className="font-semibold text-[#FFFFFF]">Browse Files</p>
                  </div>
                </label>
                {fileName && (
                  <p className="mt-2 text-sm text-gray-500">{fileName}</p>
                )}
              </div>

              <div className="flex justify-between mt-5">
                <div>
                  <div className="flex gap-2 items-center mt-3 bg-[#E7F6EC] p-2 px-3 rounded-[12px] w-[140px]">
                    <figure>{checkIcon}</figure>
                    <p className="text-[#0F973D] text-xs font-medium font-poppins">
                      Identity verified
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mt-3 bg-[#EB57571A] p-2 px-3 rounded-[12px] w-[160px]">
                    <figure>{errorIcon}</figure>
                    <p className="text-[#EB5757] text-xs font-medium font-poppins">
                      Verification failed!
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center mt-3 bg-[#F2C94C1A] p-2 px-3 rounded-[12px] w-[350px]">
                    <figure>{warningIcon}</figure>
                    <p className="text-[#4F4F4F] text-xs font-medium font-poppins">
                      We will not share your information with anyone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------- KYC INFOR FORM DISPLAY-------- */}
        </div>
        <Button
          label="Save Changes"
          btnType="submit"
          className="mt-10 !bg-[#D0D5DD] !font-poppins !w-[200px] !cursor-not-allowed"
        />
        {/* ---------KYC INFO WRAP END--------- */}
      </form>
    </DashboardDrawer>
  );
};

export default NavProfile;
