import { useState } from 'react'
import '../../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {FaTextWidth} from 'react-icons/fa'
import {Link} from 'react-router-dom'


import {  Card, CustomInput, Spinner, Form, Row, Col, Label, InputGroup, FormGroup, InputGroupAddon, InputGroupText, Input, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const sections = [
    {
        id:0,
        image : 'https://www.ewa.org/sites/main/files/imagecache/lightbox/main-images/children-in-detroit-laundromat-erin-einhorn-chalkbeat_900x610_1.jpg',
        heading : 'Join the Network',
        text : "Lorem ipsum dolor sit amet"
    },
    {
        id:1,
        image : 'https://www.ewa.org/sites/main/files/imagecache/lightbox/main-images/children-in-detroit-laundromat-erin-einhorn-chalkbeat_900x610_1.jpg',
        heading : 'Join the Network',
        text : "Lorem ipsum dolor sit amet"
    },
    {
        id:2,
        image : 'https://www.ewa.org/sites/main/files/imagecache/lightbox/main-images/children-in-detroit-laundromat-erin-einhorn-chalkbeat_900x610_1.jpg',
        heading : 'Join the Network',
        text : "Lorem ipsum dolor sit amet"
    },
    {
        id:3,
        image : 'https://www.ewa.org/sites/main/files/imagecache/lightbox/main-images/children-in-detroit-laundromat-erin-einhorn-chalkbeat_900x610_1.jpg',
        heading : 'Join the Network',
        text : "Lorem ipsum dolor sit amet"
    }

]
  const WorkList = () => {
    const [modal, setModal] = useState(null)

    const toggleModalPrimary = id => {
      if (modal !== id) {
        setModal(id)
      } else {
        setModal(null)
      }
    }

    return (
        <>
        <Card>
        <CardBody>
        <CardTitle>All List</CardTitle>

        <Table responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Heading</th>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
          sections.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                <img src={value.image} alt="" height="50" width="50"/>
              </td>

              <td> {value.heading} </td>
              <td> {value.text} </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <Link to="/frontend/work/form">
                        <DropdownItem href='/' >
                            
                        <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                        
                        </DropdownItem>
                      </Link>
                   </DropdownMenu>
                  </UncontrolledDropdown>
                   {/* edit modal */}
                   <Modal
                    isOpen={modal === value.id}
                    toggle={() => toggleModalPrimary(value.id)}
                    className='modal-dialog-centered'
                    modalClassName="modal-primary"
                    key={value.id}>
                    <ModalHeader toggle={() => toggleModalPrimary(value.id)}>Edit</ModalHeader>
                    <ModalBody>
                    <Form>
                     <Row>
                    <Col sm='12'>
                      <FormGroup>
                      <Label for='icon'>Upload Icon</Label>
                      <CustomInput type='file' id='icon' name='customFile' />
                      </FormGroup>
                    
                    </Col>
                    
                    <Col sm="12">
                      {/* how it works form */}
                      <Label for='icon-heading'>Icon Heading</Label>
                      <InputGroup className='input-group-merge' tag={FormGroup}>
                      <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                          <FaTextWidth size={15} />
                          </InputGroupText>
                      </InputGroupAddon>
                      <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                      </InputGroup>
                    </Col> 


                    <Col sm="12">
                      {/* how it works form */}
                      <Label for='icon-text'>Icon Text</Label>
                      <InputGroup className='input-group-merge' tag={FormGroup}>
                      <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                          <FaTextWidth size={15} />
                          </InputGroupText>
                      </InputGroupAddon>
                      <Input type='text' id='icon-text' placeholder='Enter your Text' />
                      </InputGroup>
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
  export default WorkList