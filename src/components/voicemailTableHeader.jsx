import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
const generateTableHeader = (column) => {
  return <TableCell key={column}>{column}</TableCell>;
};
const VoicemailTableHeader = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => generateTableHeader(column))}
      </TableRow>
    </TableHead>
  );
};

export default VoicemailTableHeader;
