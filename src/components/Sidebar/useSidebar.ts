import { useState } from "react";
import { useNavigate } from "react-router";

export const useSidebar = () => {
  const navigate = useNavigate();
  const handleRoute = (path: string) => {
    navigate(path);
  };

  const highlightPath = (path: string) => {
    const location = window.location.pathname;
    let isPath = false;
    isPath = location === path;
    return isPath;
  };

  return {
    handleRoute,
    highlightPath,
  };
};
