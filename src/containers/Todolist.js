import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

class Todolist extends React.Component {
  render() {
    return (
      <div>
        <List>
          <Heading>
            <Header>Today - Aug 30</Header>
            <small>5 items · 5 due soon</small>
          </Heading>
          <Todo>
            <span>
              Feed Bella
              <small>Vacation</small>
            </span>
            <Checkbox color="red">
              <Due background="rgba(255,0,0,0.3)" color="maroon">Due 5:00 PM</Due>
              <FontAwesome name="circle-o" />
            </Checkbox>
          </Todo>
          <Todo>
            <span>
              Feed Fox
              <small>Vacation</small>
            </span>
            <Checkbox color="red">
              <Due background="rgba(255,0,0,0.3)" color="maroon">Due 5:00 PM</Due>
              <FontAwesome name="circle-o" />
            </Checkbox>
          </Todo>
          <Todo>
            <span>
              Water the plants
              <small>Vacation</small>
            </span>
            <Checkbox color="orange">
              <FontAwesome name="circle-o" />
            </Checkbox>
          </Todo>
          <Todo>
            <span>
              Take out the trash
              <small>Vacation</small>
            </span>
            <Checkbox>
              <FontAwesome name="circle-o" />
            </Checkbox>
          </Todo>
        </List>
      </div>
    );
  }
}

const Heading = styled.div`
  margin-bottom: 15px;

  & small {
    font-size: 0.75em;
  }
`

const Header = styled.h3`
  margin: 0 0 2px;
  padding: 0;
`;

const List = styled.div``;

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
  padding: 10px 0;
  border-bottom: 1px #f0f0f0 solid;

  & small {
    margin-top: 3px;
    display: block;
    color: lightgray;
  }
`

const Checkbox = styled.div`
  display: flex;
  align-items: center;

  & .fa {
    margin-left: 10px;
    color: ${props => props.color ? props.color : 'lightgray'};
    font-size: 30px;
  }
`

const Due = styled.span`
  font-size: 0.8em;
  background: ${props => props.background ? props.background : 'transparent'};
  color: ${props => props.color ? props.color : 'black'};
  border-radius: 2px;
`

export default Todolist;
