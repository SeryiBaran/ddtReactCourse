import "./App.css";

const name = "ddtReactCourse";
const element = <h1>Здравствуй, {name}!</h1>;

function App() {
  return (
    <div className="App">
      {element}
      <p>Этот сайт написан на React и бесплатно задеплоен на Vercel.App.</p>
    </div>
  );
}

export default App;
