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
} from '@coreui/react'


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
       
        <CCol xs="12" sm="12">
            <CCard>
            <CCardHeader>
                Top Header
                <small> Form</small>
            </CCardHeader>
            <CCardBody>
                    <CRow>
                        <CCol xs="12">
                            <CFormGroup >
                            
                            <CLabel>Select Image</CLabel>
                
                            <CInputFile 
                            id="file-multiple-input" 
                                className="border py-1 rounded px-1"                     
                            />
                        
                            </CFormGroup>
                        
                            </CCol>
                    </CRow>
                    <CRow>
                    <CCol xs="12">
                        <CFormGroup>
                        <CLabel htmlFor="btn-name">Button Name</CLabel>
                        <CInput id="btn-name" placeholder="Click Me" required />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="12">
                        <CFormGroup>
                        <CLabel htmlFor="btn-link">Button's Link</CLabel>
                        <CInput id="btn-link" placeholder="Url" required />
                        </CFormGroup>
                    </CCol>
                    </CRow>
                
                </CCardBody>
            </CCard>
        </CCol>
       <CCol xs="12" sm="12">
         <TextEditor
          heading="Top Header Text"
          value="<br><br><br><h1> looking for a baby sitter? </h1><br><br><br>"
         />
       </CCol>
       <CCol xs='6' md="3" className="mb-3  ml-auto">
           <CButton block color="primary" >Submit</CButton>
        </CCol>
    </CRow>

          
        </>
    )
}
export default TopHeader;