import React , {useState}from 'react'
import  TextEditor from '../../../reusable/text-editors/TextEditors'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CDataTable,
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

const bannerData = [
  { Heading: 'HERE IN YOUR NEIGHBOREHOOD', Heading: 'Connecteing families Careing for the child', Background_Image: 'none' , action: ''}
]
const CertifiedUserData = [
  {Image: "none" , Heading: 'Cerified Babysitter', About: 'Jone | 30 years old | 10+ exp | 30$', Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem id'}
]

const fieldsBanner = ['Heading','Heading', 'Background_Image', 'action' ]
const fieldsBannerBottom = ['Image' , 'Heading','About', 'Description',  ]

const BannerList = () => {
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
              items={bannerData}
              fields={fieldsBanner}
              
              scopedSlots = {{
              
              'action':
                item => {
                      return (
                        <td className="py-2">
                            <Link to="/banner/form"> 
                          <CButton size="sm" color="info" >
                          Add
                          </CButton>
                        </Link>
                        <Link to="/banner/form"> 
                          <CButton size="sm" color="warning" className="ml-2" >
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
           <CDataTable
              items={CertifiedUserData}
              Banner={fieldsBannerBottom}
      
            
          />
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
          
        </>
    )
}
export default BannerList;