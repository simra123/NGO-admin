import React from 'react';
import {
  
    CNav,
    CNavItem,
    CNavLink,
   
    CTabContent,
    CTabPane,
    CTabs,
  } from '@coreui/react'


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
 
const CustomTabs =(props)=> {
    return(
        <CTabs activeTab={props.activeTab}  className="px-4">
        <CNav variant="tabs" className="justify-content-center custom-tabs">
          <CNavItem>
            <CNavLink data-tab="home">
              {props.title1}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="profile">
               {props.title2}
            </CNavLink>
          </CNavItem>
          
        </CNav>
        <CTabContent>
          <CTabPane data-tab={props.data-tab}>
            {`1. ${lorem}`}
          </CTabPane>
          <CTabPane data-tab={props.data-tab}>
            {`2. ${lorem}`}
          </CTabPane>
        
        </CTabContent>
  </CTabs>
    )
}
export default CustomTabs;