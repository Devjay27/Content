import React, { Component } from "react";
import axios from "axios";

class CreateCont extends Component {
  constructor(props) {
    super(props);

    this.onChangeContQuestion = this.onChangeContQuestion.bind(this);
    this.onChangeContTag = this.onChangeContTag.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      content_question: "",
      content_tag: "",
    };
  }

  onChangeContQuestion(e) {
    this.setState({
      content_question: e.target.value,
    });
  }

  onChangeContTag(e) {
    this.setState({
      content_tag: e.target.value,
    });
  }

  onSubmit(e) {
    alert("Your content is added successfully");
    e.preventDefault();

    console.log("Form submitted");
    console.log(`Question: ${this.state.content_question}`);
    console.log(`Tag: ${this.state.content_tag}`);

    const newCont = {
      content_question: this.state.content_question,
      content_tag: this.state.content_tag,
    };

    axios
      .post("http://localhost:3000/api/content", newCont)
      .then((res) => console.log(res.data));

    this.setState({
      content_question: "",
      content_tag: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create new Content</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Question</label>
            <input
              type="text"
              className="form-control"
              value={this.state.content_question}
              onChange={this.onChangeContQuestion}
              required
            />
          </div>
          <div className="form-group">
            <label>Tag</label>
            <input
              type="text"
              className="form-control"
              value={this.state.content_tag}
              onChange={this.onChangeContTag}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Content"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCont;
