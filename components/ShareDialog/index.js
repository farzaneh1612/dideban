"use client";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { usePathname } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";
import { Box, Typography, styled } from "@mui/material";
import Modal from "../Modal";
import { Instagram } from "@mui/icons-material";
// import CopyToClipboard from "../CopyToClipboard";

function ShareDialog({ open, onClose }) {
  const origin = typeof window !== "undefined" ? window?.location.origin : "";
  const pathname = usePathname();

  const url = origin + pathname;

  const iconSize = 45;

  return (
    <Modal
      maxWidth="sm"
      dir="ltr"
      closeIcon={true}
      open={open}
      onClose={onClose}
    >
      <ShareSwiperWrapper>
        <FacebookShareButton url={url}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>

        <EmailShareButton body="body" url={url}>
          <EmailIcon size={iconSize} round />
        </EmailShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={iconSize} round />
        </LinkedinShareButton>

        <WhatsappShareButton url={url}>
          <WhatsappIcon size={iconSize} round />
        </WhatsappShareButton>

        <TwitterShareButton url={url}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>

        <TelegramShareButton url={url}>
          <TelegramIcon size={iconSize} round />
        </TelegramShareButton>
        <BoxInstagram>
          <a
            href={`https://www.instagram.com/sharer.php?u=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={iconSize} round />
          </a>
        </BoxInstagram>
      </ShareSwiperWrapper>
    </Modal>
  );
}

const ShareSwiperWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
}));

const BoxInstagram = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  background:
    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  filter:
    "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "22px",
  a: {
    color: "white",
    display: "flex",
  },
}));

const TypographyCopyUrl = styled(Typography)(({ theme }) => ({
  lineHeight: 1,
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  WebkitLineClamp: "1",
  overflow: "hidden",
}));

export default ShareDialog;
