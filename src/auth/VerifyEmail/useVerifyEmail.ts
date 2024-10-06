import { useState } from "react";
import { useNavigate } from "react-router";
import { authStatusEnum } from "./enums";

export const useVerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // update
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setSuccessMessage(authStatusEnum.success);
      if (successMessage === authStatusEnum.success) {
        navigate("/login");
      } else {
        setError(false);
      }
    }, 2000);
  };
  return { handleVerify, loading, success, error };
};
