import React, { Component } from "react";

import VoicemailCard from "./voicemailcard";
import Axios from "axios";
const serverUrl = "https://sandbox.2600hz.com:8443/v2";
const credentials =
  "NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY=";
const accountId = "4642e64040cdb8b89c310a21a07c7f62";
const vmBoxId = "b37675a2d7b90d60f0ee5d4175502394";
const listVoicemail = `/accounts/${accountId}/vmboxes/${vmBoxId}/messages/`;
const headers = {
  Authorization: `Basic ${credentials}`,
};
class Voicemail extends Component {
  state = {
    voicemails: [],
    status: ["new", "saved", "deleted"],
  };

  handleChange = async (e, voicemail) => {
    e.preventDefault();
    const status = e.currentTarget.status;
    status.setAttribute("disabled", true);
    const vmBoxes = [...this.state.voicemails];
    const index = vmBoxes.indexOf(voicemail);
    voicemail.folder = e.currentTarget.status.value;
    vmBoxes[index] = voicemail;
    this.setState({ voicemails: vmBoxes });
    /*const { data } = await Axios.post(
      "https://cors-anywhere.herokuapp.com/" +
        serverUrl +
        listVoicemail +
        vmBoxes[index].media_id,
      {
        params: {
          folder: vmBoxes[index].folder,
        },
        headers,
      }
    );*/
    status.removeAttribute("disabled");
  };

  async componentDidMount() {
    const {
      data: voicemails,
    } = await Axios.get(
      "https://cors-anywhere.herokuapp.com/" + serverUrl + listVoicemail,
      { headers }
    );
    const vmBox = voicemails.data;
    this.setState({ voicemails: vmBox });
  }
  render() {
    return (
      <VoicemailCard
        cardTitle={"List of Voicemails"}
        voicemails={this.state.voicemails}
        status={this.state.status}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Voicemail;
