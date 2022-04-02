import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
const code = new URLSearchParams(window.location.search).get("code");
//URLSEARCHPARAMS offer whole address of page that is being accessed and .get code will offer all thae data available inside address in "code="
function App() {
  console.log(code);
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
