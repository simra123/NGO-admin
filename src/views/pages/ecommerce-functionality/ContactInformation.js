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

const ContactInformation = () => {
  
    return (
      <div>
        
       <CRow>
       
       <CCol xs="12" sm="12">
         <CCard>
           <CCardHeader>
            Contact Information Setttings
             <small> Form</small>
           </CCardHeader>
           <CCardBody>
             <CRow>
             <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Facebook Link</CLabel>
                   <CInput   required placeholder="Url" />
                 </CFormGroup>
               </CCol>
             </CRow>
             <CRow>
             <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Twitter Link</CLabel>
                   <CInput   required placeholder="Url" />
                 </CFormGroup>
               </CCol>
          
             <CCol xs="12">
                 <CFormGroup>
                   <CLabel >LinkedIn Link</CLabel>
                   <CInput   required placeholder="Url" />
                 </CFormGroup>
               </CCol>
               <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Google Link</CLabel>
                   <CInput   required placeholder="Url" />
                 </CFormGroup>
               </CCol>
               <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Address</CLabel>
                   <CInput   required type="address" />
                 </CFormGroup>
               </CCol>
               <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Phone Number</CLabel>
                   <CInput   required type="number" />
                 </CFormGroup>
               </CCol>
             </CRow>
            
           </CCardBody>
         </CCard>
       </CCol>
       <CCol xs="12" sm="12">
         <TextEditor
          heading="Website About Us"
          value="<br><br><br><br><br><br>"
         />
       </CCol>
      
     </CRow>
    </div>
    )
}
export default ContactInformation;