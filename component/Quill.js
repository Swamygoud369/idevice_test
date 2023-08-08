import dynamic from 'next/dynamic';
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

const QuillForm = ({value, onChange }) => {
  const [body, setBody] = useState(value.description);
    const handleOnChange = (content) => {
        if (onChange) {
          setBody(content.toString("html"));
          onChange(content.toString("html"));
        }
      };
      // console.log(body);
  return (
    <QuillNoSSRWrapper
      value={body} 
      modules={modules}
      formats={formats}
      theme="snow"
      onChange={handleOnChange}
      className="txteditor"
    />
  )
}
export default  QuillForm