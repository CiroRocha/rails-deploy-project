import React, { useState } from "react";

import ErrorMessage from "./helpers/error_message/error_message";

import { submitForm } from "./helpers/submitForm";

const ArticleForm = ({ request_method, request_url, form_authenticity_token, prepopulated_title, prepopulated_description }) => {
  const [title, setTitle] = useState(prepopulated_title || '');
  const [description, setDescription] = useState(prepopulated_description || '');

  const onSumbitForm = (event) => {
    event.preventDefault();
    const data = {
      title: {
        value: title,
        validation: (value) => {
          return value.length >= 10
        },
      },
      description: {
        value: description,
        validation: (value) => {
          return value.length >= 50
        }
      }
    }
    const successCallback = (res) => {
      if (res.status === 200) window.location.href = res.url;
    }
    submitForm(data, request_method, request_url, form_authenticity_token, successCallback);
  };

  return (
    <form>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <ErrorMessage
        fieldName="title"
        message="Title must be 10 characters long."
      />
      <br />
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <textarea
        type="textarea"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <ErrorMessage
        fieldName="description"
        message="Description must be 50 characters long."
      />
      <br />
      <button onClick={(event) => onSumbitForm(event)}>Submit</button>
    </form>
  );
};

export default ArticleForm;
