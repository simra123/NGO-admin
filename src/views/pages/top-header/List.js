import React , {useState}from 'react'
import  TextEditor from '../../../reusable/text-editors/TextEditors'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputFile,
  CLabel,
  CRow,
  CDataTable,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CBadge,
  CCollapse
} from '@coreui/react'
import { Link } from 'react-router-dom'

const getBadge = action => {
  switch (action) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const headerData = [
  {id: 0, Image: 'baby icon', Heading: 'Looking for a babysitting job?', Link: 'none' , action: ''}
]

const fields = ['Image','Heading', 'Link', 'action' ]

const TopHeader = () => {
  const [details, setDetails] = useState([])
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    } 
    setDetails(newDetails)
  }
  
    return (
      <>
       
          
          <CRow>
        <CCol xs="12" lg="12">
          <CCard>
          
            <CCardBody>
           
             <CDataTable
              items={headerData}
              fields={fields}
      
              scopedSlots = {{
              
              'action':
                item => {
                      return (
                        <td className="py-2">
                        <Link to="/header/form"> 
                          <CButton size="sm" color="info" >
                          Edit
                          </CButton>
                        </Link>
                          <CButton size="sm" color="danger" className="ml-2">
                          Delete
                        </CButton>
                    
                    </td>
                  )
                }
            }}
          />
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
          
        </>
    )
}
export default TopHeader;