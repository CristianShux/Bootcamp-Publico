import "./App.css";
import Main from "./Components/Main";
import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";

function App() {
  return (
    <>
      <div className="container">
        <TopNav />
        <Main />
        <SideNav />
      </div>
    </>
  );
}

export default App;
