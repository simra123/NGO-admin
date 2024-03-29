import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { selectThemeColors } from '@utils'
import { MoreVertical, Edit, Trash} from 'react-feather'
import Select from 'react-select'

const pageNames = [
    { value: 'ocean', label: 'About Us' },
    { value: 'blue', label: 'Services' },
    { value: 'purple', label: 'Contact Us' },
    { value: 'red', label: 'Home' }
  ]

import {  Card, Spinner, CustomInput, Label, FormGroup, CardHeader, Form, Row, Col, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const banner = [
    {  
      id:1,
      page : 'Home',
      image : 'https://www.globalpartnership.org/sites/default/files/styles/standard_blog_banner/public/29710525041_ad39691f86_k.jpg?itok=iXLyBysd'
    },
    {  
      id:2,
      page : 'About Us',
      image : 'https://www.globalpartnership.org/sites/default/files/styles/standard_blog_banner/public/29710525041_ad39691f86_k.jpg?itok=iXLyBysd'
    },
    {  
        id:3,
        page : 'Services',
        image : 'https://www.globalpartnership.org/sites/default/files/styles/standard_blog_banner/public/29710525041_ad39691f86_k.jpg?itok=iXLyBysd'
      }
    
]
  const DesktopBanner = () => {
    const [modal, setModal] = useState(null)
    const [modal2, setModal2] = useState(null)

    const toggleModalDanger = id => {
      if (modal !== id) {
        setModal(id)
      } else {
        setModal(null)
      }
    }
    const toggleModalPrimary = id => {
        if (modal2 !== id) {
          setModal2(id)
        } else {
          setModal2(null)
        }
      }
    
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
        <>
        <Card>
        <CardHeader>
          <CardTitle tag='h4'>Add Page Banners </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
            <Col className='mb-1' md='6' sm='12'>
                <Label>Page Name</Label>
                <Select
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                defaultValue={pageNames[0]}
                options={pageNames}
                isClearable={false}
                />
            </Col>
               <Col md='6' sm='12'>
                    <FormGroup>
                    <Label for='exampleCustomFileBrowser'>Upload Page Banner</Label>
                    <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                    </FormGroup>
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
      <Card>
      <CardBody>
      <CardTitle>All Banners</CardTitle>
        <Table responsive>
          <thead>
            <tr>
              <th>Page Names</th>
              <th>Banners</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
          banner.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                {value.page}
              </td>
      
              <td> <img src={value.image}  width="200" height="100" alt=""/> </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem href='/'  onClick={(e) => { 
                        e.preventDefault()  
                        toggleModalPrimary(value.id) 
                        }}>
                      <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                      </DropdownItem>

                      <DropdownItem href='/' onClick={(e) => { 
                        e.preventDefault()  
                        toggleModalDanger(value.id) 
                        }}>
                      <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                      </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>
                  <Modal
                    isOpen={modal2 === value.id}
                    toggle={() => toggleModalPrimary(value.id)}
                    className='modal-dialog-centered'
                    modalClassName="modal-primary"
                    key={value.id}>
                    <ModalHeader toggle={() => toggleModalPrimary(value.id)}>Edit</ModalHeader>
                    <ModalBody>
                       <Form>
                            <Row>
                              <Col sm='12' className="mt-2">
                                {/* basic image upload */}
                              
                                <h6> Upload Banner </h6>
                                  <DragDrop uppy={uppy} />
                                  {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
                              </Col>
                               
                            </Row>
                       </Form>
                    </ModalBody>
                    <ModalFooter>
                            
                      <Button color="primary" onClick={() => toggleModalPrimary(value.id)}>
                        Submit
                          {/* spinner */}
                          {/* <Spinner color='light' /> */}
                      </Button>
                    </ModalFooter>
                  </Modal>

                  {/* delete modal */}
                  <Modal
                    isOpen={modal === value.id}
                    toggle={() => toggleModalDanger(value.id)}
                    className='modal-dialog-centered'
                    modalClassName="modal-danger"
                    key={value.id}>
                    <ModalHeader toggle={() => toggleModalDanger(value.id)}>Delete</ModalHeader>
                    <ModalBody>
                    Are you sure you want to delete this?
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" onClick={() => toggleModalDanger(value.id)}>
                        delete
                      </Button>
                    </ModalFooter>
                  </Modal>
              </td>
              </tr>
              )
          })
      }
      
    </tbody>
  </Table>
  </CardBody>
  </Card>
  </>
    )
  }
  export default DesktopBanner
  