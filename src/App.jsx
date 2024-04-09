import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TicketScreen from "./pages/TicketScreen.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/tickets" element={<TicketScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
