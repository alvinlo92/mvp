import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  position: fixed;
  background-color: rgb(45, 45, 45);
  width: 230px;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  padding-top: 24px;
`;

const SharedLinkStyle = styled(Link)`
  color: rgb(255, 255, 255);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
`;

const LogoLink = styled(SharedLinkStyle)`
  font-size: 27px;
  font-weight: 500;
  padding-left: 20px;
  padding-bottom: 25px;
`;

const LogoIcon = styled.svg`
  width: 42px;
  fill: rgb(255, 255, 255);
  padding-right: 5px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ItemLink = styled(SharedLinkStyle)`
  font-size: 14px;
  padding-left: 30px;
  padding-top: 25px;
`;

const ItemIcon = styled.svg`
  width: 20px;
  fill: rgb(255, 255, 255);
  padding-right: 25px;
`;

const Navbar = () => (
  <StyledNavbar>
    <LogoLink to="/">
      Nextcast
      <LogoIcon viewBox="0 0 512 512">
        <path d="m437.02 74.98c-48.353-48.351-112.64-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98s132.667-26.629 181.02-74.98c48.351-48.353 74.98-112.64 74.98-181.02s-26.629-132.667-74.98-181.02zm-317.02 205.02c0 13.255-10.745 24-24 24s-24-10.745-24-24v-48c0-13.255 10.745-24 24-24s24 10.745 24 24zm80 40c0 13.255-10.745 24-24 24s-24-10.745-24-24v-128c0-13.255 10.745-24 24-24s24 10.745 24 24zm80 48c0 13.255-10.745 24-24 24s-24-10.745-24-24v-224c0-13.255 10.745-24 24-24s24 10.745 24 24zm80-48c0 13.255-10.745 24-24 24s-24-10.745-24-24v-128c0-13.255 10.745-24 24-24s24 10.745 24 24zm56-16c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24s24 10.745 24 24v48c0 13.255-10.745 24-24 24z" />
      </LogoIcon>
    </LogoLink>
    <List>
      <div>
        <ItemLink to="/">
          Home
          <ItemIcon viewBox="0 0 512 512">
            <path d="m504 231.566406-56-55.039062v-139.203125c0-8.828125-7.167969-16-16-16h-74.667969c-8.832031 0-16 7.171875-16 16v35.585937l-74.496093-68.671875c-6.207032-5.738281-15.804688-5.632812-21.90625.214844l-237.035157 227.21875c-5.015625 5.015625-7.894531 11.925781-7.894531 18.988281 0 14.699219 11.96875 26.664063 26.667969 26.664063h37.332031v192c0 23.574219 19.09375 42.667969 42.667969 42.667969h298.664062c23.574219 0 42.667969-19.09375 42.667969-42.667969v-192h37.332031c14.699219 0 26.667969-11.964844 26.667969-26.664063 0-7.0625-2.878906-13.972656-8-19.09375zm0 0" />
          </ItemIcon>
        </ItemLink>
      </div>
      <div>
        <ItemLink to="/search">
          Search
          <ItemIcon viewBox="0 0 512.00533 512">
            <path d="M508.885,493.784L353.109,338.008c32.341-35.925,52.224-83.285,52.224-135.339c0-111.744-90.923-202.667-202.667-202.667 S0,90.925,0,202.669s90.923,202.667,202.667,202.667c52.053,0,99.413-19.883,135.339-52.245l155.776,155.776 c2.091,2.091,4.821,3.136,7.552,3.136c2.731,0,5.461-1.045,7.552-3.115C513.045,504.707,513.045,497.965,508.885,493.784z M202.667,384.003c-99.989,0-181.333-81.344-181.333-181.333S102.677,21.336,202.667,21.336S384,102.68,384,202.669 S302.656,384.003,202.667,384.003z" />
          </ItemIcon>
        </ItemLink>
      </div>
      <div>
        <ItemLink to="/top-charts">
          Top Charts
          <ItemIcon viewBox="0 0 512.00533 512">
            <path d="m155.003 90.001h342c8.284 0 15-6.716 15-15s-6.716-15-15-15h-342c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
            <path d="m497.003 241.001h-342c-8.284 0-15 6.716-15 15s6.716 15 15 15h342c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
            <path d="m497.003 422.001h-342c-8.284 0-15 6.716-15 15s6.716 15 15 15h342c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
            <path d="m26.003 30.001h8.512v95c0 8.284 6.716 15 15 15s15-6.716 15-15v-110c0-8.284-6.716-15-15-15h-23.512c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
            <path d="m74.083 295.753c-8.847.111-18.162.192-26.478.228 5.659-7.649 13.006-17.786 22.378-31.176 7.1-10.143 11.74-19.777 13.794-28.635.114-.491.203-.987.267-1.487l.533-4.173c.081-.63.121-1.265.121-1.901 0-23.494-19.113-42.607-42.606-42.607-20.314 0-37.897 14.453-41.808 34.365-1.597 8.129 3.699 16.013 11.828 17.609 8.13 1.595 16.013-3.699 17.609-11.828 1.154-5.879 6.357-10.146 12.37-10.146 6.692 0 12.183 5.242 12.583 11.835l-.281 2.203c-.932 3.577-3.26 9.377-8.988 17.563-17.055 24.369-27.23 37.691-32.696 44.849-6.906 9.042-10.71 14.023-8.206 22.166 1.492 4.849 5.153 8.565 10.048 10.196 2.03.677 3.657 1.219 24.6 1.219 8.314 0 19.673-.085 35.31-.282 8.283-.104 14.914-6.904 14.811-15.188-.106-8.283-6.918-14.902-15.189-14.81z" />
            <path d="m44.637 372.001c-20.264 0-37.802 14.417-41.702 34.28-1.597 8.129 3.699 16.013 11.828 17.609 8.13 1.595 16.013-3.699 17.609-11.829 1.145-5.829 6.303-10.06 12.265-10.06 6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5c-8.284 0-15 6.716-15 15s6.716 15 15 15c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5c-6.202 0-11.524-4.616-12.378-10.736-.081-.58-.122-1.173-.122-1.764 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 1.972.138 3.959.409 5.909 2.911 20.86 21.007 36.591 42.091 36.591 23.435 0 42.5-19.065 42.5-42.5 0-10.481-3.822-20.082-10.134-27.5 6.313-7.418 10.134-17.019 10.134-27.5 0-23.434-19.066-42.5-42.5-42.5z" />
          </ItemIcon>
        </ItemLink>
      </div>
      <div>
        <ItemLink to="/library">
          Library
          <ItemIcon viewBox="0 0 512.00533 512">
            <path d="m128 104.003906v-32c0-4.417968-3.582031-8-8-8h-112c-4.417969 0-8 3.582032-8 8v32zm0 0" />
            <path d="m0 120.003906v264h128v-264zm96 104h-64c-4.417969 0-8-3.582031-8-8v-64c0-4.417968 3.582031-8 8-8h64c4.417969 0 8 3.582032 8 8v64c0 4.417969-3.582031 8-8 8zm0 0" />
            <path d="m0 432.003906v40c0 4.417969 3.582031 8 8 8h112c4.417969 0 8-3.582031 8-8v-40zm0 0" />
            <path d="m0 400.003906h128v16h-128zm0 0" />
            <path d="m144 400.003906h104v16h-104zm0 0" />
            <path d="m248 32.003906v-24c0-4.417968-3.582031-7.99999975-8-7.99999975h-88c-4.417969 0-8 3.58203175-8 7.99999975v24zm0 0" />
            <path d="m144 88.003906h104v296h-104zm0 0" />
            <path d="m144 432.003906v40c0 4.417969 3.582031 8 8 8h88c4.417969 0 8-3.582031 8-8v-40zm0 0" />
            <path d="m144 48.003906h104v24h-104zm0 0" />
            <path d="m263.808594 165.667969 4.28125 16.433593 135.484375-36.128906-4.285157-16.433594zm0 0" />
            <path d="m330.664062 421.949219 135.480469-36.128907-8.578125-32.886718-135.488281 36.128906zm0 0" />
            <path d="m453.527344 337.453125-45.910156-176-135.488282 36.128906 45.910156 176zm0 0" />
            <path d="m259.769531 150.1875 135.476563-36.125-11.484375-44.058594c-1.183594-4.265625-5.542969-6.816406-9.839844-5.757812l-120 32c-4.238281 1.160156-6.765625 5.5-5.683594 9.757812zm0 0" />
            <path d="m470.183594 401.300781-135.488282 36.128907 9.542969 36.574218c.554688 2.0625 1.90625 3.820313 3.761719 4.882813 1.207031.730469 2.589844 1.117187 4 1.117187.699219 0 1.398438-.082031 2.078125-.238281l120-32c4.238281-1.160156 6.765625-5.503906 5.683594-9.761719zm0 0" />
          </ItemIcon>
        </ItemLink>
      </div>
    </List>
  </StyledNavbar>
);

export default Navbar;
