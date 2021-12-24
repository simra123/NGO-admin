import { useState } from 'react'
import { EditorState } from 'draft-js'
import '../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import { Link } from 'react-router-dom'


import { Card, Input, CardTitle, CardBody, Table, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

const pages = [
  {
    id: 1,
    no: 1,
    name: 'About us',
    venue: 'lorem ipsum',
    date: '5-dec-2021'
  },
  {
    id: 2,
    no: 2,
    name: 'Terms And Conditions',
    venue: 'lorem ipsum',
    date: '5-dec-2021'
  },
  {
    id: 3,
    no: 3,
    name: 'Privact Policy',
    venue: 'lorem ipsum',
    date: '5-dec-2021'
  }

]
const Pages = () => {

  //modalb 
  const [modal, setModal] = useState(null)
  //const [modal2, setModal2] = useState(null)

  const toggleModalDanger = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }
  // const toggleModalPrimary = id => {
  //   if (modal2 !== id) {
  //     setModal2(id)
  //   } else {
  //     setModal2(null)
  //   }
  // }
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>Activity List </CardTitle>

          <Table responsive>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Activity Name</th>
                <th>Venue</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                pages.map((value, index) => {
                  return (
                    <tr key={ index }>
                      <td>
                        { value.no }
                      </td>

                      <td> { value.name } </td>
                      <td> { value.venue } </td>
                      <td> { value.date } </td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                            <MoreVertical size={ 15 } />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <Link to="/activity/form">
                              <DropdownItem href='/' >
                                <Edit className='mr-50' size={ 15 } />  <span className='align-middle'>Edit</span>
                              </DropdownItem>
                            </Link>
                            <DropdownItem href='/' onClick={ (e) => {
                              e.preventDefault()
                              toggleModalDanger(value.id)
                            } }>
                              <Trash className='mr-50' size={ 15 } /> <span className='align-middle'>Delete</span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        {/* delete modal */ }
                        <Modal
                          isOpen={ modal === value.id }
                          toggle={ () => toggleModalDanger(value.id) }
                          className='modal-dialog-centered'
                          modalClassName="modal-danger"
                          key={ value.id }>
                          <ModalHeader toggle={ () => toggleModalDanger(value.id) }>Delete</ModalHeader>
                          <ModalBody>
                            Are you sure you want to delete this?
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger" onClick={ () => toggleModalDanger(value.id) }>
                              delete
                            </Button>
                          </ModalFooter>
                        </Modal>
                        {/* <Modal
                          isOpen={modal2 === value.id}
                          toggle={() => toggleModalPrimary(value.id)}
                          className='modal-dialog-centered'
                          modalClassName="modal-primary"
                          key={value.id}>
                          <ModalHeader toggle={() => toggleModalPrimary(value.id)}>Edit</ModalHeader>
                          <ModalBody>
                              <Form>
                                  <Row>
                                      <Col sm='12' >
                                       
                                          <Label for='att-name'>Attribute Name</Label>
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
                        </Modal> */}
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
export default Pages
