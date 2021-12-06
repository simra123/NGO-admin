import { useState } from 'react'
import '../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {Link} from 'react-router-dom'


import {  Card, CardTitle, CardBody, Table, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'

  const pages = [
    {
      id:1,
      no : 1,
      name : 'lorem ipsum',
      image : 'https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-breaking-news-speech-bubble-banner-vector-id1197831888?k=20&m=1197831888&s=612x612&w=0&h=HFWpcI1kIwr_GwwRSqOHlpf9r-BAartlbFtshuCY4Zw=',
      author : 'John',
      date : '6 Dec 2021'
    },
    {
        id:2,
        no : 2,
        name : 'lorem ipsum',
        image : 'https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-breaking-news-speech-bubble-banner-vector-id1197831888?k=20&m=1197831888&s=612x612&w=0&h=HFWpcI1kIwr_GwwRSqOHlpf9r-BAartlbFtshuCY4Zw=',
        author : 'John',
        date : '6 Dec 2021'
    },
    {
        id:3,
        no : 3,
        name : 'lorem ipsum',
        image : 'https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-breaking-news-speech-bubble-banner-vector-id1197831888?k=20&m=1197831888&s=612x612&w=0&h=HFWpcI1kIwr_GwwRSqOHlpf9r-BAartlbFtshuCY4Zw=',
        author : 'John',
        date : '6 Dec 2021'
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
              <th>Name</th>
              <th> Image </th>
              <th>Author</th>
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
              <td><img src={value.image} height="50" width="50" /> </td>
              <td> {value.author} </td>
              <td> {value.date} </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <Link to="/news/form">
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
