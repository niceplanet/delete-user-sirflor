import { Container } from "./components/Container";

function App() {
  return (
    <div
      className="flex-col flex items-center justify-center h-full px-4 p-2
    font-primary"
    >
      <img
        src="/delete-user-sirflor/logoSirflor.png"
        alt="Logo sirflor"
        className="mb-6 h-auto"
      />
      <Container />
    </div>
  );
}

export default App;
