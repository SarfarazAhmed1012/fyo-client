import { useState } from "react";

const ChaptersScreen = ({ chapters, chapterHandler }) => {
  const [activeId, setActiveId] = useState("");

  return (
    <div className="min-vh-100 shadow-lg p-3 bg-red">
      <h1 className="fs-5 fw-bold text-center" style={{ color: "white" }}>
        Chapters
      </h1>
      <hr />
      <div style={{ overflowY: "auto", height: "350px", paddingRight: "13px" }}>
        <ul className="list-group text-end">
          {chapters && chapters.length > 0 ? (
            chapters.map((chapter) => (
              <div key={chapter.id} style={{ cursor: "pointer" }}>
                <li
                  onClick={(e) => {
                    chapterHandler(chapter);
                    setActiveId(chapter.id);
                  }}
                  style={{ color: chapter.id === activeId && "#FF4820" }}
                >
                  <span>{chapter.id} - </span>{" "}
                  <span>{chapter.name_arabic}</span>
                </li>
                <hr />
              </div>
            ))
          ) : (
            <div className="text-center">
              <span className="spinner-border"></span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ChaptersScreen;
