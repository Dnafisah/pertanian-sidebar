import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  padding: 20px;
  height: 10px;
  font-size: 15px;
  text-decoration:none;

  &:hover {
    background: #008000;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #008000;
  padding-left: 2rem;
  align-items: left;
  text-decoration: none;
  color: #f5f5f5;
  display :block;
  margin-top:10px;
  font-size: 13px;

  &:hover {
    background: #556B2F;
    cursor: pointer;
  }
`;

export default function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}