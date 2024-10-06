import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ForgotPasswordFormType } from "./types";

export const useForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // ROUTE TO CREATE ACCOUNT
  const handleCreateAccountRoute = () => navigate("/create-account");
  // ROUTE TO CHECK MAIL
  const handleCheckEmailResetRoute = () => navigate("/check-email-reset");

  const handleResetPassword = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    handleCheckEmailResetRoute();
  };
  

  const formik = useFormik<ForgotPasswordFormType>({
    initialValues: {
      email_address: "",
    },
    onSubmit: (values) => {
      handleResetPassword();
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return {
    formik,
    loading,
    handleCreateAccountRoute,
  };
};
