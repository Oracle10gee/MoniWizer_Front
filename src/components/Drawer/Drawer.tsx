import { Drawer } from "@mui/material";
import React from "react";

export default function DashboardDrawer({
  children,
  open,
  onClose,
  className,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}) {
  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            backgroundColor: "white",
            //   color: "#FFFFFF",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          },
        }}
      >
        <div className={className}>{children}</div>
      </Drawer>
    </React.Fragment>
  );
}
