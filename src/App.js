import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/homepage";
import Liste from "./components/pages/Liste/liste";
import Knjige from "./components/pages/knjige/knjige";

// U funkciji App definisiane rute u react routeru
// Rute koje postoje su root ruta books i lists
// Na ruti / kreira se stranica Homepage na kojoj pretrazujemo knjige koje zelimo da dodamo u favorite (knjige koje zelimo da citamo)
// Ruta /books sadrzi knjige koje trenutno citamo i knjige koje smo procitali
// Ruta /lists sadrzi knjige odvojene po listama ili kategorijama po zelji korisnika
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/books" element={<Knjige />} />
          <Route path="/lists" element={<Liste />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
