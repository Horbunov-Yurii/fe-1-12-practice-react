import "modern-normalize";

import { Section } from './components/Section/Section';
import { Tittle } from './components/Tittle/Tittle';
import { CardList } from './components/CardList/CardList';
import { Ivent } from './components/Ivent/Ivent';
import './App.css';
import games from "./games.json"
import { Button } from "./components/Button/Button";
import SubTitle from "./SubTitle/SubTitle";

function App() {
  return (
    <Section>
      <Tittle text="Найпопулярніші ігри" />
      <SubTitle text="Може навіть найкраші"/>
      <CardList>
        <Ivent props={games} />
      </CardList>
      <Button text="Open" success  />
      <Button text="Close" error />
      <Button text="Warning" info/>
    </Section>
  );
}

export default App;
