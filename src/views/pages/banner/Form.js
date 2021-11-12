import React from 'react'
import  TextEditor from '../../../reusable/text-editors/TextEditors'

import usersData from '../../users/UsersData'
import { Link } from 'react-router-dom'



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

const Banner = () => {
    return(
      
      <CRow>
       
       <CCol xs="12" sm="12">
         <CCard>
           <CCardHeader>
             Banner
             <small> Form</small>
           </CCardHeader>
           <CCardBody>
             <CRow>
               <CCol xs="12">
                 <CFormGroup >
                
                 <CLabel>Select Background Image</CLabel>
       
                 <CInputFile 
                   id="file-multiple-input" 
                    className="border py-1 rounded px-1"                     
                 />
               
                 </CFormGroup>
               
               </CCol>
               <CCol xs="12">
                 <CFormGroup >
                
                 <CLabel>Profile Image</CLabel>
       
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
          heading="Banner Top Text"
          value="<p>HERE IN YOUR NEIGHBOREHOOD <p> <h1> Connecteing families <br> Careing for the child </h1>"
         />
       </CCol>
       <CCol xs="12" sm="12">
         <TextEditor
          heading="Certified Section text"
          value="<h1>Certified Babysitter </h1>
          <h3> Jone | 30 years old | 10+ exp | 30$ </h3> <br> <br>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem id ullam harum, ipsa quam modi quo omnis ducimus</h2>"
         />
       </CCol>
       <CCol xs='6' md="3" className="mb-3  ml-auto">
           <CButton block color="primary" >Submit</CButton>
         </CCol>
     </CRow>
       
     
        
    )
}
export default Banner;