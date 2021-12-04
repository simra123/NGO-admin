import { useState } from 'react'
import { EditorState } from 'draft-js'
import '../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {Link} from 'react-router-dom'


import {  Card, Input, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const pages = [
    {
      id:1,
      no : 1,
      name : 'About us',
      venue : 'lorem ipsum',
      date : '5-dec-2021'
    },
    {
      id:2,
      no : 2,
      name : 'Terms And Conditions',
      venue : 'lorem ipsum',
      date : '5-dec-2021'
    },
    {
        id:3,
        no : 3,
        name : 'Privact Policy',
        venue : 'lorem ipsum',
        date : '5-dec-2021'
      }

]
  const Pages = () => {

    //modal
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
              <tr key={index}>
              <td>
                {value.no}
              </td>

              <td> {value.name} </td>
              <td> {value.venue} </td>
              <td> {value.date} </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <Link to="/activity/form">
                        <DropdownItem href='/' >
                            
                        <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                        
                        </DropdownItem>
                      </Link>

                  </DropdownMenu>
                  </UncontrolledDropdown>
                 
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
