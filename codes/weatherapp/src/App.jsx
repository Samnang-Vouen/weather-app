import Header from './components/header'
import Main from './components/Main1'


function App() {
  const dark = false;

  return (
    <>
      <div className={`App-${dark ? 'dark' : 'light'}`}>
        <Header/>
        <Main/>
      </div>
    </>
  )
}

export default App
