import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const RecitersScreen = ({ reciters, reciterHandler }) => {
  const [selectedReciter, setSelectedReciter] = useState("");
  const [activeId, setActiveId] = useState("");

  return (
    <div className="min-vh-100 shadow-lg p-3 bg-red" style={{ color: "white" }}>
      <h1 className="fs-5 fw-bold text-center" style={{ color: "white" }}>
        Reciters
      </h1>

      <hr />
      <div
        style={{
          overflowY: "scroll",
          height: "350px",
        }}
      >
        {reciters && reciters.length > 0 ? (
          reciters.map((reciter) => (
            <div style={{ cursor: "pointer" }}>
              <div
                onClick={(e) => {
                  reciterHandler(reciter);
                  setActiveId(reciter.id);
                }}
                style={{ color: reciter.id === activeId && "red" }}
              >
                <FaUserCircle className="fs-3" />
                <span className="ps-3">{reciter.name}</span> <br />
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div className="text-center">
            <span className="spinner-border"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecitersScreen;
