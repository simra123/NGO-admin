import { useState } from 'react'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import {CgAttribution} from 'react-icons/cg'
import {  Card, CardHeader, Form, Row, Col, Label, InputGroup, FormGroup, InputGroupAddon, InputGroupText, Input, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const attributeValues = [
    {   id:0,
        value : 'value',
        name : 'Ocean'
    },
    {
        id:1,
        value : 'value',
        name : 'Purple'
    }
  
  
]
const attributeNames = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ]
  const ServiceForm = () => {
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
    return (
        <>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Add New Attribute Value</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12' md="6">
                    {/* value form */}
                    <Label for='att-name'>Attribute Value</Label>
                    <InputGroup className='input-group-merge' tag={FormGroup}>
                    <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                        <CgAttribution size={15} />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type='text' name='name' id='att-name' placeholder='Enter your Attibute name' />
                    </InputGroup>
                </Col>
                <Col className='mb-1' md='6' sm='12'>
                <Label>Attribute Name</Label>
                <Select
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                defaultValue={attributeNames[0]}
                options={attributeNames}
                isClearable={false}
                />
                </Col>
                <Col sm='12' className="">
                <FormGroup className='d-flex mb-0'>
                    <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                    </Button.Ripple>
                </FormGroup>
                </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <Card>
      <CardBody>
      <CardTitle>All Attribute Values</CardTitle>

    <Table responsive>
      <thead>
        <tr>
          <th>Attribute Value</th>
          <th>Attribute Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
          attributeValues.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                {value.value}
              </td>
      
              <td>{value.name}</td>
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
                                
                                <Col className='mb-1' md='6' sm='12'>
                                    <Label>Attribute Name</Label>
                                    <Select
                                    theme={selectThemeColors}
                                    className='react-select'
                                    classNamePrefix='select'
                                    defaultValue={attributeNames[0]}
                                    options={attributeNames}
                                    isClearable={false}
                                    />
                                </Col>
                                <Col sm='12' md="6">
                                    {/* value form */}
                                    <Label for='att-name'>Attribute Value</Label>
                                    <InputGroup className='input-group-merge' tag={FormGroup}>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                        <CgAttribution size={15} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' name='name' id='att-name' placeholder='Enter your Attibute name' />
                                    </InputGroup>
                                </Col>
                                   
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                            
                      <Button color="primary" onClick={() => toggleModalPrimary(value.id)}>
                        Submit
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
  export default ServiceForm
  