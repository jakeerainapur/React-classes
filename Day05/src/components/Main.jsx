function Main() {
  return (
    <main className="main" id="rules">

      <div className="card">

        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBj0m1wajVSVYdMAq36XcDCyl-ioKTkW-GqG2V2ZiDTNdhzzh1YcOAwolH&s=10"
          alt="React Logo"
        />

        <h1 className="rule">Rules of JSX</h1>

        <ul className="tables">
          <li>Must enclose JSX in a root element</li>
          <li>Choose the tag's properties correctly</li>
          <li>Use className instead of class</li>
          <li>Use camelCase for attributes</li>
          <li>Use curly braces for JavaScript</li>
        </ul>

      </div>

    </main>
  );
}

export default Main;