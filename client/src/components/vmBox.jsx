import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
class VmBox extends Component {
  state = {
    vmBoxes: [],
  };
  async componentDidMount() {
    const { data: vmBoxes } = await Axios.get("/selectVmBox");
    this.setState({ vmBoxes: vmBoxes.data });
    console.log(this.state.vmBoxes);
  }
  render() {
    return (
      <form>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Messages</th>
            </tr>
          </thead>
          <tbody>
            {this.state.vmBoxes.map((vm) => (
              <tr key={vm.id}>
                <td>
                  <Link
                    className="btn btn-md btn-outline-secondary"
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: `/MessageList/${vm.id}`,
                      state: { vm },
                    }}
                  >
                    Show Messages
                  </Link>
                </td>
                <td>{vm.name}</td>
                <td>{vm.messages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    );
  }
}

export default VmBox;
