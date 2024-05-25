"use client";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useIsMobileView from "@/hooks/useIsMobileView";

function Accordion({ items }) {
  const [expanded, setExpanded] = useState(false);
  const isMobileView = useIsMobileView();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <MuiAccordionStyle
        dir="rtl"
        expanded={expanded === items.id}
        onChange={handleChange(items.id)}
      >
        <AccordionSummaryStyle
          expandIcon={expanded === items.id ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1d-content"
          id="panel1a-header"
        >
          <Typography
            variant={isMobileView ? "h6" : "h5"}
            textAlign="right"
            color="text.main"
            fontWeight={500}
            pr={2}
          >
            {items?.header}
          </Typography>
        </AccordionSummaryStyle>

        <AccordionDetails>
          {" "}
          <Typography
            variant={isMobileView ? "h6" : "h5"}
            textAlign="right"
            color="text.main"
            fontWeight={400}
            pr={6}
            lineHeight={1.7}
          >
            {items?.body}
          </Typography>
        </AccordionDetails>
      </MuiAccordionStyle>
    </>
  );
}

export default Accordion;

export const AccordionSummaryStyle = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",

  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
export const MuiAccordionStyle = styled(MuiAccordion)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderBottom: "1px solid #C5C5C5",
  padding: theme.spacing(2, 0),
}));
