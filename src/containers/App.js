import React, { Component } from 'react';
import Header from 'components/Header';
import Menu from 'containers/Menu';
import Todolist from 'containers/Todolist';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper>
          <Menu />
          <List>
            <Todolist />
          </List>
        </Wrapper>
      </div>
    );
  }
}

const List = styled.section`
  flex: 0 0 73%;
  background: #fff;
  padding: 40px;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 950px;
  height: 100%;
`;

export default App;
