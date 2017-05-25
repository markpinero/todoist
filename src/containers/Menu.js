import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import Forecast from 'components/Forecast';

class Menu extends Component {
  render() {
    return (
      <Container>
        <MenuContainer>
          <Forecast />
          <Block>
            <span><FontAwesome name="inbox" /> Inbox</span>
            <Count>5</Count>
          </Block>
          <Block>
            <span><FontAwesome name="calendar-o" /> Today</span>
            <Count>16</Count>
          </Block>
          <Block>
            <span><FontAwesome name="briefcase" /> Work</span>
            <Count>16</Count>
          </Block>
          <Block>
            <span><FontAwesome name="credit-card" /> Vacation</span>
            <Count>4</Count>
          </Block>
        </MenuContainer>
        <ProjectContainer>
          <ProjectTabs>
            <li className="active">Projects</li>
            <li>Labels</li>
            <li>Filters</li>
          </ProjectTabs>
          <Project color="red">
            <FontAwesome name="circle" /> Vacation
          </Project>
          <Project color="blue">
            <FontAwesome name="circle" /> Work
          </Project>
        </ProjectContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  flex: 0 0 25%;
`;

const MenuContainer = styled.ul`
  margin: 0;
  padding: 40px 0;
  list-style-type: none;
`;

const Block = styled.li`
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;

  &:not(:last-of-type) {
    border-bottom: 1px rgba(0,0,0,0.1) solid;
  }

  & .fa {
    margin-right: 10px;
  }
`;

const Count = styled.div`
  color: rgba(0,0,0,0.7);
`;

const ProjectContainer = styled.div`
  font-size: 0.8em;
  padding: 0 10px;
`

const ProjectTabs = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style-type: none;
  display: flex;
  text-align: center;

  & li {
    flex: 1 1;
    text-align: center;
    color: silver;
    font-weight: 300;
    padding: 0 0 10px;
    border-bottom: 1px silver solid;
  }

  & .active {
    color: black;
    font-weight: bold;
    border-bottom: 1px black solid;
  }
`

const Project = styled.div`
  margin: 10px 0;

  & span {
    color: ${props => props.color ? props.color : 'inherit'};
    margin: 0 10px;
  }
`

export default Menu;
