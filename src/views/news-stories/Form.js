import { useState } from 'react'
import '../../@core/scss/react/libs/flatpickr/flatpickr.scss'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Flatpickr from 'react-flatpickr'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import {AiOutlineNumber} from 'react-icons/ai'
import {MdDriveFileRenameOutline} from 'react-icons/md'
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
  Spinner
  } from 'reactstrap' 
  import {  Activity } from 'react-feather'


  const NewsnStoriesForm = () => {
    //date
    const [picker, setPicker] = useState(new Date())
    //text editor
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
          <CardTitle tag='h4'>Add News and Stories</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
            <Col sm='12' md="12">
                {/*new and story form */}
                <Label for='pro-name'>Name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <MdDriveFileRenameOutline size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='pro-name' placeholder='Enter your Name' />
                </InputGroup>
            </Col>
            <Col sm='12' className="mt-2">
                {/* basic image upload */}
                
                <h6> Upload Image </h6>
                    <DragDrop uppy={uppy} />
                    {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
                </Col>
            <Col sm='12' md="6" className="mt-2">
                {/*new and story form */}
                <Label for='venue'>Author</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <MdDriveFileRenameOutline size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='number'  id='venue' placeholder='Enter your Author' />
                </InputGroup>
            </Col>
            <Col className='mt-2' md='6' sm='12'>
                <Label for='default-picker'>Date</Label>
                <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
            </Col>
            <Col sm='12' className="mt-2">
                {/* text editor */}
              <h6>news and story Description</h6>
              <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
            </Col>           
           <Col sm='12' className="mt-2">
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
  export default NewsnStoriesForm
  