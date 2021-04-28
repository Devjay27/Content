const Content = require("../models/model");

createQue = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a question",
    });
  }

  const ques = new Content(body);

  ques
    .save()
    .then((ques) => {
      return res.status(201).json({
        ques: "Question added Successfully",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Question not Added!",
      });
    });
};

createTag = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a Tag",
    });
  }

  const tag = new Content(body);

  tag
    .save()
    .then((tag) => {
      return res.status(201).json({
        tag: "Tag added Suucessfully",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Tag not Added!",
      });
    });
};

getContent = async (req, res) => {
  await Content.find({}, (err, contents) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!contents.length) {
      return res
        .status(404)
        .json({ success: false, error: "Content not found!" });
    }
    return res.status(200).json(contents);
  }).catch((err) => console.log(err));
};

module.exports = {
  createQue,
  createTag,
  getContent,
};
