import React from 'react'
import ReactQuill from 'react-quill'
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'


import './TextEditors.scss'



const TextEditors = (props) => {
const initialText = props.value


  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']                                         // remove formatting button
    ]
  }

  const [text, setText] = React.useState(initialText)

  return (
    <CCard >
      <CCardHeader>
       {props.heading}
      </CCardHeader>
      <CCardBody >
        <ReactQuill  value={text} modules={modules} onChange={setText}/>
      </CCardBody>
    </CCard>
  )
}

export default TextEditors
