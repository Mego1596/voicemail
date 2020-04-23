import React, { Component } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const renderInformation = (voicemail, status, handleChange) => {
  var TimeFormat = require("hh-mm-ss");
  return (
    <TableRow key={voicemail.call_id}>
      <TableCell>
        <form onSubmit={(event) => handleChange(event, voicemail)}>
          <select
            className="form-control"
            name="status"
            defaultValue={voicemail.folder}
            placeholder="Select Status"
          >
            {status.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-sm btn-outline-success m-2">
            Change Status
          </button>
        </form>
      </TableCell>
      <TableCell>{voicemail.from}</TableCell>
      <TableCell>{voicemail.to}</TableCell>
      <TableCell>{TimeFormat.fromMs(voicemail.length, "hh:mm:ss")}</TableCell>
    </TableRow>
  );
};

class VoicemailTableBody extends Component {
  render() {
    return (
      <TableBody>
        {this.props.voicemails
          ? this.props.voicemails.map((voicemail) =>
              renderInformation(
                voicemail,
                this.props.status,
                this.props.handleChange
              )
            )
          : null}
      </TableBody>
    );
  }
}

export default VoicemailTableBody;
