import React from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      editable: true,
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      editable: true,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
      editable: true,
    },
  ];
  return (
    <Box m={"20px"}>
      <Header
        title={"Contacts"}
        subtitle={"List of Contacts for Future Reference"}
      />
      <Box
        m={"40px 0 0 0"}
        height={"70vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
