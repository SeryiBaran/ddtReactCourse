import "./Whoim.css";

const buttonWhoim = <button id="buttonWhoim">Узнать</button>;
const name = "супер крутой пельмешек";

function ImGen(props: any) {
  return <p>Я {props.name}!</p>;
};

const im = <ImGen name={name} />;

function Whoim() {
  return (
    <div>
      <h3>Чтобы узнать кто я, нажми на кнопку!</h3>
      {buttonWhoim}
    </div>
  );
}

export default Whoim;
