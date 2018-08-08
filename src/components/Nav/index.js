import React from 'react';
import Styled from './style';
import Logo from '../Logo/index';
import Avatar from '../Avatar/index';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navigation = () => (
  <Styled>
    <Navbar expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/components/">
            <Logo />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/components/">
            <Avatar />
          </NavLink>
        </NavItem>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Filter
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>
              Food
            </DropdownItem>
            <DropdownItem tag="a" href="/blah" active>
              Architectuur
            </DropdownItem>
            <DropdownItem tag="a" href="/blah" active>
              Peeps
            </DropdownItem>
            <DropdownItem tag="a" href="/blah" active>
              Kunst
            </DropdownItem>
            <DropdownItem tag="a" href="/blah" active>
              Natuur
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  </Styled>
);

export default Navigation;
