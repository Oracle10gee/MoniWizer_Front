import { useState } from "react";
import { useNavigate } from "react-router";
import { authStatusEnum } from "./enums";

export const useVerifySuccessfull = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);     
        navigate("/login");
    
    }, 2000);
  };
  return { handleVerify, loading, success,  };
};
