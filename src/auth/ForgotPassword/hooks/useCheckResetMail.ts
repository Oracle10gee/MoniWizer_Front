import { useState } from "react";
import { useNavigate } from "react-router";

export const useCheckResetMail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const location = window.location.pathname;
  const isPasswordResetSuccess = location === "/password-reset-success";

  //   ROUTE TO NEW PASSWORD

  const handleNewPasswordRoute = () => navigate("/new-password/13");

  const handleCheckResetMail = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      handleNewPasswordRoute();
    }, 2000);
  };
  return { handleCheckResetMail, loading, success, isPasswordResetSuccess };
};
