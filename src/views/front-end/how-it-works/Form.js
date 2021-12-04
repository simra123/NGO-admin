import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import '../../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../../@core/scss/react/libs/editor/editor.scss'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  CustomInput,
  Spinner
  } from 'reactstrap'
  import {FaTextWidth} from 'react-icons/fa'

  
  const WorksForm = () => {
    const [value, setValue] = useState(EditorState.createEmpty())

    //file uploader
    const [img, setImg] = useState(null)
    const uppy = new Uppy({
      meta: { type: 'avatar' },
      restrictions: { maxNumberOfFiles: 1 },
      autoProceed: true
    })
  
    uppy.use(thumbnailGenerator)
  
    uppy.on('thumbnail:generated', (file, preview) => {
      setImg(preview)
    })
    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>How it Works</CardTitle>
        </CardHeader>
        <CardBody>
        <Form>
            <Row>
              <Col md="12" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>
              <Col sm='12' className="mt-2">
                {/* basic image upload */}
                
                  <h6> Upload Image </h6>
                    <DragDrop uppy={uppy} />
                    {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
              </Col>
              <Col sm='12' className="my-2">
                  {/* text editor */}
                <h6>Text </h6>
                <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
              </Col>
              <Col sm='12' className="mt-1">
                <FormGroup className='d-flex mb-0'>
                  <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                      {/* spinner */}
                      {/* <Spinner color='light' /> */}
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default WorksForm
  