import React, { Component } from "react";
import axios from "axios";

class ContList extends Component {
  constructor(props) {
    super(props);
    this.state = { conts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/content")
      .then((response) => {
        this.setState({ conts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  paraList() {
    return this.state.conts.map((cont) => {
      return (
        <tr key={cont._id}>
          <td>{cont.content_question}</td>
          <td>{cont.content_tag}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <p>Welcome to Content App</p>
        <p>To add content, navigate to Create Content Tab</p>
        <p>The Content is displayed below</p>
        <h3>Paragraph</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>{this.paraList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ContList;
