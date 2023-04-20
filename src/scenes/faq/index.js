import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import React from "react";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Freuqently Asked Questions Page "} />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant={"h5"}>
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant={"h5"}>
            Question 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Esse minim
            ad consectetur nisi. Anim aliqua ex consequat culpa anim laborum ut
            ad enim. Magna labore consequat eu enim tempor nulla do. Consequat
            velit in officia cupidatat officia officia nulla irure ad dolore
            magna minim reprehenderit irure. Commodo ex culpa enim in ut velit
            officia ex esse fugiat nisi. Sunt excepteur nostrud excepteur ipsum
            ex culpa tempor elit quis est Lorem. Anim magna incididunt nostrud
            cillum nisi et qui minim. Ad cupidatat aliquip cupidatat in ipsum
            duis cillum nostrud in sint. Aute velit sint culpa adipisicing
            dolore pariatur. Magna consequat magna aliqua mollit tempor
            exercitation consectetur qui adipisicing. Nulla qui non sunt labore
            et dolore sint Lorem sint pariatur ex duis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant={"h5"}>
            Question 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant={"h5"}>
            Question 3
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
