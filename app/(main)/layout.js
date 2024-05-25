"use client";

import { BoxHome, Main } from "./layout.style";

import { Box, Typography } from "@mui/material";
import Modal from "@/components/Modal";

import { useState } from "react";
import AppBar from "./_components/Header/_components/AppBar";
import SideMenu from "./_components/Header/_components/SideMenu";
import { GetProfile } from "../api/api";
import { httpToken } from "@/config/http";
import useNotify from "@/hooks/useNotify";
import { useRouter } from "next/navigation";
import { ROUTES_PATH_HOST_USER } from "@/constants/route";
import useIsMobileView from "@/hooks/useIsMobileView";

export default function DefaultLayout({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const notify = useNotify();
  const router = useRouter();
  const isMobileView = useIsMobileView("md");
  const [open, setOpen] = useState(isMobileView ? false : true);

  const toggleDrawer = () => {
    setOpen((v) => !v);
  };


  return (
    <>
      

      <Box sx={{ display: "flex" }}>
        <SideMenu
          open={open}
          
          setOpenModal={setOpenModal}
        />

        <Main open={open}>
          <Box>
              <AppBar  openDrawer={open} />
              
              {children}
          </Box>
      </Main>
      </Box>
    </>
  );
}
