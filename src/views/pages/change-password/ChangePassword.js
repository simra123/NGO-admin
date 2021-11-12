import React from 'react'
import LoginBg from '../../../assets/images/logo.png'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCardGroup>
          <CCard className="text-white bg-info d-md-down-none" style={{ width: '44%' }}>
              <CCardBody className="text-center">
                <div>
                 <CImg src={LoginBg} width="100%" height="auto" />
                </div>
              </CCardBody>
            </CCard>
            <CCard className="p-4">
              <CCardBody>
              <CForm>
                  <h3 className="text-center mb-5">Change Password</h3>
                  
                  <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="New Password" autoComplete="new-password" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Retype New Password" autoComplete="confirm-password" />
                    </CInputGroup>
                 <Link to="/dashboard">
                  <CButton color="primary" className="mb-4" block>Login</CButton>
                  </Link>
                </CForm>
              </CCardBody>
            </CCard>
           
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
  )
}

export default ChangePassword
