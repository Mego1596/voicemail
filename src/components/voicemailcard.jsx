import React from "react";
import { Grid } from "@material-ui/core";
import VoicemailTable from "./voicemailTable";
const VoicemailCard = ({ cardTitle, voicemails, status }) => {
  return (
    <div className="container">
      <div className="card">
        <div
          className="card-header text-center  bg-primary"
          style={{ color: "white" }}
        >
          {cardTitle}
        </div>
        <div className="card-body">
          <Grid>
            <VoicemailTable
              columns={["status", "from", "to", "duration (hh:mm:ss)"]}
              voicemails={voicemails}
              status={status}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default VoicemailCard;
