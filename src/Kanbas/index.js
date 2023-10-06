import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import './index.css';

function Kanbas() {
    return (
      <div className="d-flex kanbas-container">
        <KanbasNavigation />
        <div>
          <h1>Account</h1>
          <h1>Dashboard</h1>
          <h1>Courses</h1>
        </div>
      </div>
  ); }
  export default Kanbas;