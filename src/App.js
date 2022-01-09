import logo from './logo.svg';
import './App.css';
import greencheck from "./greencheck.png";

function Header(props){
  
  return(
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

function Main(props){
  return(
    <section>
      <p>Born {props.adjective} June 01, 1999</p>
      <img src="https://github.com/ajholley24.png" height={200}/>
      <ul style = {{textAlign: "left" }}>
        {props.skills.map((skill) => (
          <li key = {skill.id}>{skill.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props){
  return(
    <section>
      <p>Website created {props.year} </p>
    </section>
  );
}

const skills = [
  "C + Python Programming",
  "Embedded Programming",
  "Canbus Communication Networks"
];

const skillObjects = skills.map((skill, i) => ({id: i, title: skill}));



function App() {
  return (
    <div className="App">
      <Header name = "Aaron Jacob Holley"/>
      <Main adjective = "on" skills = {skillObjects} />
      <Footer year = {new Date().getFullYear()} />
    </div>
  );
}

export default App;
