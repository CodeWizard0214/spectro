import React, { useState } from "react";
import "./styles.css";

import Waveform from "./Waveform";
import PlayList from "./PlayList";

// const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

const tracks = [
  {
    id: 0,
    title: "1.mp3",
    url: "https://animal-delta.vercel.app/1.mp3",
  },
  {
    id: 1,
    title: "60429.mp3",
    url: "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3",
  },
];

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="App">
      <Waveform url={selectedTrack.url} />
      <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
      <br />
    </div>
  );
}
