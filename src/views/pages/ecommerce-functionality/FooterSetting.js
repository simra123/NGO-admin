import React from 'react'
import  TextEditor from '../../../reusable/text-editors/TextEditors'

import usersData from '../../users/UsersData'


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
const fields = ['name','registered', 'role', 'action']

const FooterSetting = () => {
  
    return (
      <div>
        
       <CRow>
       
       <CCol xs="12" sm="12">
         <CCard>
           <CCardHeader>
            Footer dynamic 
             <small> Form</small>
           </CCardHeader>
           <CCardBody>
             <CRow>
             <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Privacy Policy link</CLabel>
                   <CInput   required placeholder="Url" />
                 </CFormGroup>
               </CCol>
             </CRow>
             <CRow>
             <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Terms And Conditions link</CLabel>
                   <CInput   required placeholder="Url" />
                 </CFormGroup>
               </CCol>
          
            
             </CRow>
            
           </CCardBody>
         </CCard>
       </CCol>
       <CCol xs="12" sm="12">
         <TextEditor
          heading="Footer Description"
          value="<br><br><br><br><br><br>"
         />
       </CCol>
      
     </CRow>
    </div>
    )
}
export default FooterSetting;