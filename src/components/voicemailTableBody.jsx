import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const handleChange = () => {};

const renderInformation = (voicemail, status) => {
  var TimeFormat = require("hh-mm-ss");
  return (
    <TableRow key={voicemail.call_id}>
      <TableCell>
        <select
          className="form-control"
          defaultValue={voicemail.folder}
          placeholder="Select Status"
        >
          {status.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      </TableCell>
      <TableCell>{voicemail.from}</TableCell>
      <TableCell>{voicemail.to}</TableCell>
      <TableCell>{TimeFormat.fromMs(voicemail.length, "hh:mm:ss")}</TableCell>
    </TableRow>
  );
};

const VoicemailTableBody = ({ voicemails, status }) => {
  return (
    <TableBody>
      {voicemails.data
        ? voicemails.data.map((voicemail) =>
            renderInformation(voicemail, status)
          )
        : null}
    </TableBody>
  );
};

export default VoicemailTableBody;
