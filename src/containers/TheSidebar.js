import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CNavItem,
  CProgress,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import LogoFull from '../assets/images/logo2.png'
import LogoMini from '../assets/images/logo.png'


// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      unfoldable
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
      className="sidebar-custom"
    >
      <CSidebarBrand className="d-md-down-none" to="/">
      <CImg src={LogoFull}  
        className="c-sidebar-brand-full"    
        name="logo-negative"
        height={140}
        width={190}
        />
        <CImg src={LogoMini}  
        className="c-sidebar-brand-minimized"    
        name="sygnet"
        height={55}
        width={150}
        />
      
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />

        
       
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
