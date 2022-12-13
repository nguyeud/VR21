import MainNav from "./components/MainNav";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [unsplashAPIData, setUnsplashAPIData] = useState([]);

  // get some data
  useEffect(() => {
    const clientId = "1qp3CxUPaFhrXSRWJ8FlK5HhbA4IUREh6SVoXMA91Ak";
    const searchTerm = "sunsets";
    const resource = `https://api.unsplash.com/search/photos/?query=${searchTerm}&per_page=20&client_id=${clientId}`;

    fetch(resource)
      .then((response) => response.json())
      .then((data) => setUnsplashAPIData(data.results));
  }, []);

  return (
    <div className="App">
      {/* Add a navbar */}
      <MainNav />
      {/* Add card container */}
      <div className="card-container">
        {unsplashAPIData &&
          unsplashAPIData.map((data, index) => (
            <p key={index}>{data.alt_description}</p>
          ))}
          <Card />
      </div>
    </div>
  );
}

export default App;