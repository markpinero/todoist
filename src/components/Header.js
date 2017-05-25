import React, { Component } from 'react';
import { Container } from 'styles';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Container>
          <Logo>
            <FontAwesome name="check-square" />
          </Logo>
          <Menu>
            <div className="nav-left">
              <FontAwesome name="pencil" />
              <FontAwesome style={{color: 'rgba(255,255,255,0.4)'}} name="undo" />
            </div>
            {/*<div className="nav-right">
              <FontAwesome name="bell" />
              <FontAwesome name="search" />
            </div>*/}
          </Menu>
        </Container>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  background: #3d3d3d;
  color: #FFF;
`

const Logo = styled.div`
  flex: 0 0 25%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 72%;

  & span {
    margin-right: 15px;
  }

`;

export default Header;
