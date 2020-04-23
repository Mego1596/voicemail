import React, { Component } from "react";

import VoicemailCard from "./voicemailcard";
import Axios from "axios";
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
    const data = await Axios.get(
      `http://localhost:3001/voicemailMessage/${vmBoxes[index].media_id}/${vmBoxes[index].folder}`
    );
    status.removeAttribute("disabled");
  };

  async componentDidMount() {
    const { data: voicemails } = await Axios.get(
      "http://localhost:3001/listVoicemail"
    );
    const vmBox = voicemails;
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
