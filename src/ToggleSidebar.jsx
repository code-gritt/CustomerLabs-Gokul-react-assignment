import { useState } from "react";
import "./ToggleSidebar.css";

const ToggleSidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div style={{ textAlign: "center" }} className="container-fluid mt-3">
        <button className="btn btn-primary" onClick={ToggleSidebar}>
          Save Segment
        </button>

        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">Saving Segment</h4>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a className="sd-link">Menu Item 1</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 2</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 3</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 4</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 5</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 6</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 7</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 8</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default ToggleSidebar;
