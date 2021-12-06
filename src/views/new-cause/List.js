import { useState } from 'react'
import '../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {Link} from 'react-router-dom'


import {  Card, Input, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const pages = [
    {
      id:1,
      no : 1,
      name : 'lorem ipsum',
      raiseFund : '44',
      reqFund : '20'
    },
    {
        id:2,
        no : 2,
        name : 'lorem ipsum',
        raiseFund : '44',
        reqFund : '20'
    },
    {
        id:3,
        no : 3,
        name : 'lorem ipsum',
        raiseFund : '44',
        reqFund : '20'
    }

]
  const Pages = () => {

    //modal
    const [modal, setModal] = useState(null)
    return (
        <>
        <Card>
        <CardBody>
        <CardTitle>Cause List </CardTitle>

        <Table responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Cause Name</th>
              <th>Raise Fund</th>
              <th>Required Fund</th>
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
              <td> {value.raiseFund} </td>
              <td> {value.reqFund} </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <Link to="/cause/form">
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
