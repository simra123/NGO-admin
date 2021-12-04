import { useState } from 'react'
import '../../@core/scss/react/libs/flatpickr/flatpickr.scss'
import Flatpickr from 'react-flatpickr'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { EditorState } from 'draft-js'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import MultipleUploader from '@src/views/forms/form-elements/file-uploader/FileUploaderMulti'
import {AiOutlineNumber} from 'react-icons/ai'


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


  const ActivityForm = () => {
      //date
    const [picker, setPicker] = useState(new Date())
    //  file Uploader
    const [img, setImg] = useState(null)
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
          <CardTitle tag='h4'>Add New Activity</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
            <Col sm='12' md="6">
                {/*product form */}
                <Label for='pro-name'>Activity Name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Activity size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='pro-name' placeholder='Enter your Activity Name' />
                </InputGroup>
            </Col>
            <Col sm='12' md="6">
                {/*product form */}
                <Label for='venue'>Activity Venue</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <AiOutlineNumber size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='number'  id='venue' placeholder='Enter your Venue' />
                </InputGroup>
            </Col>

            <Col className='mb-1' md='12' sm='12'>
            <Label for='default-picker'>Activity Date</Label>
             <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
            </Col>
           
            <Col sm='12'  className="mt-2">
                {/* Multiple image upload */}
            
               <h6>Upload Activity Imags And Videos </h6>
               <div className="mt-1">
               <MultipleUploader/>
               </div>

            </Col>
           <Col sm='12' className="mt-4">
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
  export default ActivityForm
  