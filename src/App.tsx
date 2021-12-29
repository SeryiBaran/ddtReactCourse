import './App.css'

const name = 'ddtReactCourse';
const element = <h1>Здравствуй, {name}!</h1>;

function App() {
  return (
    <div className="App">
      {element}
      <p>Этот сайт написан на React.</p>
    </div>
  )
}

export default App
