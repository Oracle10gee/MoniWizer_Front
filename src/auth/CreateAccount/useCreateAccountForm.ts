import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateAccountFormType, PasswordField } from "./types";
import { registerUser } from "utils/api";

export const useCreateAccountForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const { password, confirmPassword } = showPassword;

  // ROUTE TO CREATE ACCOUNT
  const handleLoginRoute = () => navigate("/login");

  const handleShowPassword = (param: PasswordField) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [param]: !prevState[param],
    }));
  };

 const handleSubmit = async (values: CreateAccountFormType) => {
  setLoading(true);
  try {
    const response = await registerUser(values); // API call to register the user
    
    // Check if the response indicates success
    if (response.message === "User created successfully") {
      alert("User created successfully")
      // navigate("/verify-email"); // Redirect on success
    } else {
      // Handle failure (e.g., show error message to user)
      console.error("Registration failed:", response.message);
      // Optionally set an error state to display a message in the UI
    }
  } catch (error) {
    console.error("An error occurred during registration:", error);
    // Handle error (e.g., show error message to user)
  } finally {
    setLoading(false);
  }
};


  const formik = useFormik<CreateAccountFormType>({
    initialValues: {
      fullname: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      referral: "",
      isAgreement: false,
    },
   onSubmit: handleSubmit,
  });

  return {
    formik,
    password,
    confirmPassword,
    handleShowPassword,
    loading,
    handleLoginRoute,
  };
};
