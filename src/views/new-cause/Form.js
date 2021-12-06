import { useState } from 'react'
import '../../@core/scss/react/libs/flatpickr/flatpickr.scss'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { Editor } from 'react-draft-wysiwyg'
import {MdDriveFileRenameOutline} from 'react-icons/md'
import {RiFundsFill} from 'react-icons/ri'
import { EditorState } from 'draft-js'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import MultipleUploader from '@src/views/forms/form-elements/file-uploader/FileUploaderMulti'


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


  const CauseForm = () => {

    //text editor
     const [value, setValue] = useState(EditorState.createEmpty())
     // multiple file uploader 
     const [previewArr, setPreviewArr] = useState([])

    const uppyMultiple = new Uppy({
        meta: { type: 'avatar' },
        autoProceed: true
      })
    
      uppyMultiple.use(thumbnailGenerator)
    
      uppyMultiple.on('thumbnail:generated', (file, preview) => {
        const arr = previewArr
        arr.push(preview)
        setPreviewArr([...arr])
      })
    
      const renderPreview = () => {
        if (previewArr.length) {
          return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' src={src} alt='avatar' />)
        } else {
          return null
        }
      }
    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Add New Cause</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
            <Col sm='12' md="12">
                {/*cause form */}
                <Label for='pro-name'>Cause Name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <MdDriveFileRenameOutline size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='pro-name' placeholder='Enter your Cause Name' />
                </InputGroup>
            </Col>
            
            <Col sm='12'  className="mt-2">
                {/* Multiple image upload */}
            
               <h6>Upload Cause Imags And Videos </h6>
               <div className="mt-1">
               <MultipleUploader/>
               </div>

            </Col>
            <Col sm='12' md="6" className="mt-2">
                {/*cause form */}
                <Label for='venue'>Fund Raise</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <RiFundsFill size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='number'  id='venue' placeholder='Enter your Fund Raise' />
                </InputGroup>
            </Col>
            <Col sm='12' md="6" className="mt-2">
                {/*cause form */}
                <Label for='venue'>Required Fund</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <RiFundsFill size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='number'  id='venue' placeholder='Enter your Required Fund' />
                </InputGroup>
            </Col>
            <Col sm='12' className="mt-2">
                {/* text editor */}
              <h6>Cause Description</h6>
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
  export default CauseForm
  