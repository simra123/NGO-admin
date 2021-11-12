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

const AboutUs = () => {
    return(
        <CTabs activeTab="forms"  className="px-4">
            <CNav variant="tabs" className=" custom-tabs mb-4">
            <CNavItem>
                <CNavLink data-tab="forms">
                Create Form
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink data-tab="list">
                Form List
                </CNavLink>
            </CNavItem>
            
            </CNav>
           <CTabContent>
                <CTabPane data-tab="forms" id="forms">
                    <CRow>
                        <CCol xs="12" sm="12">
                            <TextEditor
                            heading="About Heading and text"
                            value="<h1>Professional senior care,
                            whenever you need it. </h1> <br/> <br/>
                            <p>we this is perhaps the single biggest obstacle that
                            all of us must overcome successful.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae corporis, recusandae nobis qui repudiandae nam sint hic? Minus sed doloremque neque aspernatur ad ut accusantium consectetur maxime</p>
                           "
                            />
                        </CCol>
                        <CCol xs="12" sm="12">
                            <CCard>
                                <CCardHeader>
                                    About Us
                                    <small> Form</small>
                                </CCardHeader>
                                <CCardBody>
                                    <CRow>
                                    <CCol xs="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="btn-link">Video's Link</CLabel>
                                            <CInput id="btn-link" placeholder="Url" required />
                                        </CFormGroup>
                                    </CCol>
                                        <CCol xs="12">
                                            <CFormGroup >
                                            
                                                <CLabel>Select Icon </CLabel>
                                    
                                                <CInputFile 
                                                id="file-multiple-input" 
                                                    className="border py-1 rounded px-1"                     
                                                />
                                        
                                            </CFormGroup>
                                        
                                        </CCol>
                                        <CCol xs="12">
                                            <CFormGroup >
                                            
                                                <CLabel>Select Icon </CLabel>
                                    
                                                <CInputFile 
                                                id="file-multiple-input" 
                                                    className="border py-1 rounded px-1"                     
                                                />
                                        
                                            </CFormGroup>
                                        
                                        </CCol>
                                        <CCol xs="12">
                                            <CFormGroup >
                                            
                                                <CLabel>Select Icon </CLabel>
                                    
                                                <CInputFile 
                                                id="file-multiple-input" 
                                                    className="border py-1 rounded px-1"                     
                                                />
                                        
                                            </CFormGroup>
                                        
                                        </CCol>
                                        <CCol xs="12">
                                            <CFormGroup >
                                            
                                                <CLabel>Select Icon </CLabel>
                                    
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
                        <CCol xs="12" sm="6">
                            <TextEditor
                            heading="Card Text"
                            value="<h1> 100 </h1> <br/> <p>Local Partners </p> "
                            />
                        </CCol>
                        <CCol xs="12" sm="6">
                            <TextEditor
                            heading="Card text"
                            value="<h1> 100 </h1> <br/> <p>Local Partners </p>"
                            />
                        </CCol>
                        <CCol xs="12" sm="6">
                            <TextEditor
                            heading="Card Text"
                            value="<h1> 100 </h1> <br/> <p>Local Partners </p>"
                            />
                        </CCol>
                        <CCol xs="12" sm="6">
                            <TextEditor
                            heading="Card Text"
                            value="<h1> 100 </h1> <br/> <p>Local Partners </p>"
                            />
                        </CCol>
                        <CCol xs='6' md="3" className="mb-3  ml-auto">
                            <CButton block color="primary" >Submit</CButton>
                        </CCol>
                    </CRow>
                </CTabPane>
                <CTabPane data-tab="list">
                    <CRow>
                        <CCol xs="12" lg="12">
                            <CCard>
                            
                                <CCardBody>
                                    <CDataTable
                                    items={usersData}
                                    fields={fields}
                                    itemsPerPage={7}
                                    pagination
                                    scopedSlots = {{
                                        'action':
                                        (item)=>(
                                            <td>
                                            <Link to="/AboutUs#forms" >
                                            <CButton data-tab="forms" color={getBadge(item.action)}>
                                                {item.action}
                                            </CButton>
                                            </Link>
                                            </td>
                                        )

                                    }}
                                    
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CTabPane>
        
            </CTabContent>
        </CTabs>
        
    )
}
export default AboutUs;