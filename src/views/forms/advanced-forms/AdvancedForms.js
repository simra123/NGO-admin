import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CFormText,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { TextMask, InputAdapter } from 'react-text-mask-hoc'

// React DateRangePicker
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'



// React select
import states from './states'
import Select from 'react-select'
import {useSelector} from 'react-redux';

const AdvancedForms = () => {

  const darkMode = useSelector(state => state.darkMode)

  const [value, setValue] = React.useState([
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' }
  ])

  const [date, setDate] = React.useState({startDate: null, endDate: null})
  const [focused, setFocused] = React.useState()

  return (
    <CRow>
      <CCol sm={12} md={6} style={{flexBasis: 'auto'}}>
        <CCard>
          <CCardHeader>
            Masked Input
            <small> React Text Mask</small>{' '}
            
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel>Date input</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-calendar" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. 99/99/9999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Phone input</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-phone" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. (999) 999-9999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Taxpayer Identification Numbers</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-dollar" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. 99-9999999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Social Security Number</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. 999-99-9999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Eye Script</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. ~9.99 ~9.99 999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Credit Card Number</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-credit-card" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. 9999 9999 9999 9999
              </CFormText>
            </CFormGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={12} md={6}>
        <CCard>
          <CCardHeader>
            React-Select{' '}
            
           
          </CCardHeader>
          <CCardBody>
            <Select
              name="form-field-name2"
              value={value}
              options={states}
              onChange={setValue}
              isMulti
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: darkMode ? 'black' : theme.colors.primary,
                  primary25: darkMode ? 'black' : theme.colors.primary25,
                  dangerLight: darkMode ? 'black' : theme.colors.dangerLight,
                  neutral0: darkMode ? '#2a2b36' : theme.colors.neutral0
                },
              })}
            />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            React-Dates{' '}
            

          </CCardHeader>
          <CCardBody>
            <DateRangePicker
              startDate={date.startDate}
              startDateId="startDate"
              endDate={date.endDate}
              endDateId="endDate"
              onDatesChange={value => setDate(value)}
              focusedInput={focused}
              onFocusChange={focusedInput => setFocused(focusedInput)}
              orientation="horizontal"
              openDirection="down"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AdvancedForms
