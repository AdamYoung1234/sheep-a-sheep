import { useState, useEffect } from "react";
import ChessBoard from "./components/ChessBoard";
import initAssets from "./utils/assets";
import getMap from "./utils/mapUtils";

import "./App.css";

const App = () => {
  const [assets, setAssets] = useState();
  const [map, setMap] = useState();

  useEffect(() => {
    const str =
      '{"err_code":0,"err_msg":"","data":{"map_md5":["046ef1bab26e5b9bfe2473ded237b572","04f702ff82d3c42a67a468a1248d717a"],"map_seed":[2569533669,2452405107,362228333,3765846069],"map_seed_2":"1665338606"}}';
    const { data } = JSON.parse(str);
    initAssets().then((initialzedAssets) => setAssets(initialzedAssets));
    getMap(data.map_md5[1], data.map_seed).then((m) => setMap(m));
  }, []);

  return (
    <div className="App">
      {assets ? (
        <ChessBoard assets={assets} map={map} />
      ) : (
        <div> Initializing </div>
      )}
    </div>
  );
};

export default App;
