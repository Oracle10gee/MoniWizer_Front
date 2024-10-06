import { useFormik } from "formik";
import { LoginFormType } from "./types";
import { useState } from "react";
import { useNavigate } from "react-router";
import { logUser } from "utils/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // ROUTE TO CREATE ACCOUNT
  const handleCreateAccountRoute = () => navigate("/create-account");
  const handleForgotPasswordRoute = () => navigate("/forgot-password");
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values: LoginFormType) => {
    setLoading(true);
     try {
    const response = await logUser(values); // API call to register the user
   
    // Check if the response indicates success
    if (response) {
      toast.success(response.message)
      //     navigate("/dashboard"); 
    } else {
      // Handle failure (e.g., show error message to user)
       toast.error("error")
      console.error("Login failed:", response.message);
      // Optionally set an error state to display a message in the UI
    }
  } catch (error) {
    toast.error("Something went wrong")
    console.error("An error occurred during login:", error);
    // Handle error (e.g., show error message to user)
  } finally {
    setLoading(false);
  }
   
  };

  const formik = useFormik<LoginFormType>({
    initialValues: {
      email: "",
      password: "",
      // remember_me: false,
    },
    onSubmit: handleSubmit,
  });

  return {
    formik,
    handleTogglePassword,
    showPassword,
    loading,
    handleCreateAccountRoute,
    handleForgotPasswordRoute,
  };
};
