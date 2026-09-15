import Demo from "./JS/Demo";
import "./App.css";

function App({ name }) {
  return (
    <>  
    <Demo name={name}>
      <h1>React</h1>
      <h2>Main Frame</h2>
    </Demo>
    <Demo name={name}>
      <h1>React</h1>
      <h2>Main Frame</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta eius dolore nostrum omnis! Ea officiis assumenda, quas, suscipit quidem officia rerum dolorem dicta quibusdam consequuntur fugiat enim non libero.</p>
    </Demo>
    </>
  );
}

export default App;