import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { Section } from './components/Section/Section';
import { Tittle } from './components/Tittle/Tittle';
import { CardList } from './components/CardList/CardList';
import { Ivent } from './components/Ivent/Ivent';
import './App.css';
import games from "./games.json"
import { Button } from "./components/Button/Button";
import SubTitle from "./components/SubTitle/SubTitle";



const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

body{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: gray;
}


`



function App() {
  return (
    <>
      <GlobalStyle />
      <Section>
        <Tittle text="Найпопулярніші ігри" />
        <SubTitle text="Може навіть найкраші" />
        <CardList>
          <Ivent props={games} />
        </CardList>
        {/* <Button text="Open" success />
        <Button text="Close" error />
        <Button text="Warning" info /> */}
        <Button text="Hello world"/>
      </Section>
    </>
  );
}

export default App;
