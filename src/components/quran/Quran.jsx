import { useEffect, useState } from "react";
import axios from "axios";
import RecitersScreen from "./ReciterScreen";
import PlayerScreen from "./PlayerScreen";
import ChaptersScreen from "./ChapterScreen";
import Navbar from "../navbar/Navbar";
import "./Quran.css";

const Quran = () => {
  const [reciters, serReciters] = useState([]);
  const [chapters, setChapters] = useState([]);

  const [chapterDetail, setChapterDetail] = useState(null);
  const [reciterDetail, setReciterDetail] = useState(null);

  // Get All Reciters with Audio
  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_english.php`);

      serReciters(reciters);
    }

    fetchData();
  }, []);

  // Get All Chapters
  useEffect(() => {
    async function fetchData() {
      const {
        data: { chapters },
      } = await axios.get(`https://api.quran.com/api/v4/chapters`);

      setChapters(chapters);
    }
    reciters && reciters.length > 0 && fetchData();
  }, [reciters]);

  const reciterHandler = (reciter) => {
    setReciterDetail(reciter);
  };
  const chapterHandler = (chapter) => {
    setChapterDetail(chapter);
  };

  return (
    <div className="gradient__bg" style={{}}>
      <Navbar />
      <div className="row p-5 home-body" style={{ color: "white" }}>
        <div className="reciter_class col-lg-4 col-md-4 col-sm-12 col-12 scroll">
          <RecitersScreen reciters={reciters} reciterHandler={reciterHandler} />
        </div>
        <div className="chapter_class col-lg-4 col-md-4 col-sm-12 col-12 scroll">
          <ChaptersScreen chapters={chapters} chapterHandler={chapterHandler} />
        </div>
        <div className="chapter_class col-lg-4 col-md-4 col-sm-12 col-12">
          <PlayerScreen
            reciterDetail={reciterDetail}
            chapterDetail={chapterDetail}
          />
        </div>
      </div>
    </div>
  );
};

export default Quran;
