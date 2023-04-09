import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./helpers/AuthProvider";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
