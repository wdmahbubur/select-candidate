import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="p-3">
        <Main></Main>
      </main>
    </div>
  );
}

export default App;
