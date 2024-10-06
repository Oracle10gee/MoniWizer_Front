import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { NewPasswordFormType, PasswordField } from "./types";

export const useNewPasswordForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    new_password: false,
    verify_password: false,
  });
  const { new_password, verify_password } = showPassword;
  //   ROUTE TO PASSWORD RESET SUCCESS MESSAGE
  const handleRestPasswordSuccessRoute = () =>
    navigate("/password-reset-success");

  const handleShowPassword = (param: PasswordField) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [param]: !prevState[param],
    }));
  };

  const handleResetPassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleRestPasswordSuccessRoute();
    }, 2000);
  };

  const formik = useFormik<NewPasswordFormType>({
    initialValues: {
      new_password: "",
      verify_password: "",
    },
    onSubmit: (values) => {
      handleResetPassword();
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return {
    formik,
    loading,
    handleShowPassword,
    new_password,
    verify_password,
  };
};
