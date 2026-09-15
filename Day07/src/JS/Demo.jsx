export default function Demo({ name, children }) {
  return (
    <div>
      <h1>{name}</h1>

      {children}
    </div>
  );
}