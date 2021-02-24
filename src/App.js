import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import ContentHeader from './components/ContentHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
            <ContentHolder>
              <ContentHeader />
              <ContentArea>
                <Switch>
                  <Route path="/room">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <Login />
                  </Route>
                </Switch> 
              </ContentArea>
            </ContentHolder>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: orange;
  display: grid;
  grid-template-rows: 38px auto;
`

const Main = styled.div`
  width: 100%;
  background: #fff;
  display: grid;
  grid-template-columns: 260px auto;
`;

const ContentHolder = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
`
const ContentArea = styled.div`
  padding: 20px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
`;