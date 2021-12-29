import './App.css'

function formatName(user: any) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'участникам курса',
  lastName: 'ddtReactCourse'
};

const element = (
  <h1>
    Привет {formatName(user)}!
  </h1>
);

function App() {
  return (
    <div className="App">
      {element}
      <p>Этот сайт написан на React.</p>
    </div>
  )
}

export default App
