import "./App.css";
import NavBar from "./components/NavBar";
import ApplyLoan from "./components/ApplyLoan";
import Ple_PageContent from "./components/Ple_PageContent";
import EligibilityCriteria from "./components/EligibilityCriteria";
function App() {
  return (
    <main>
      <NavBar />
      <ApplyLoan />
      <Ple_PageContent />
      <EligibilityCriteria />
    </main>
  );
}

export default App;
