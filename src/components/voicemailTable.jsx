import React from "react";
import Table from "@material-ui/core/Table";
import VoicemailTableHeader from "./voicemailTableHeader";
import VoicemailTableBody from "./voicemailTableBody";
const VoicemailTable = ({ columns, voicemails, status, handleChange }) => {
  return (
    <Table aria-label="simple table">
      <VoicemailTableHeader columns={columns} />
      <VoicemailTableBody
        voicemails={voicemails}
        status={status}
        handleChange={handleChange}
      />
    </Table>
  );
};

export default VoicemailTable;
