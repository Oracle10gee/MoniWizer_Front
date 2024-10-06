import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export interface Modal {
  children: React.ReactNode;
  onClose: (param: boolean) => void;
  open: boolean;
  className?: string;
  width?: string;
}

export default function DashboardModal({
  children,
  open,
  onClose,
  className,
  width,
}: Modal) {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width || "400px",
    border: "none",
    bgcolor: "background.paper",
    //   border: "2px solid #000",
    boxShadow: 24,
    //   p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className={`rounded-lg p-0 border-none overflow-auto ${className}`}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
}
