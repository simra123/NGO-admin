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

const WebSetting = () => {
  
    return (
      <div>
        
       <CRow>
       
       <CCol xs="12" sm="12">
         <CCard>
           <CCardHeader>
             Website General Setttings
             <small> Form</small>
           </CCardHeader>
           <CCardBody>
             <CRow>
             <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Website Name</CLabel>
                   <CInput   required />
                 </CFormGroup>
               </CCol>
             </CRow>
             <CRow>
               <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Website Meta Description</CLabel>
                   <CInput  placeholder="" required />
                 </CFormGroup>
               </CCol>
               <CCol xs="12">
                 <CFormGroup>
                   <CLabel >Website Meta Tag</CLabel>
                   <CInput  placeholder="" required />
                 </CFormGroup>
               </CCol>
               <CCol xs="12">
                <CFormGroup >
                    
                        <CLabel>Menu Logo</CLabel>
            
                        <CInputFile 
                        id="file-multiple-input" 
                            className="border py-1 rounded px-1"                     
                        />
                
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
export default WebSetting;