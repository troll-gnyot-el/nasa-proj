import React, { useEffect, useState } from "react";
import "./SpaceNews.css";
function SpaceNews() {
  const [apodData, setApodData] = useState(null);
  const apiKey = "PXnZuew4VCDnkUgZW7KeYHeuoOYvkyOs5rAiCuOG"; // Замени 'YOUR_API_KEY' на свой API ключ от NASA

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
        );
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
    };

    fetchApodData();
  }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только после монтирования компонента

  return (
    <div>
      {apodData && (
        <div className="astronomy-container">
          <h1 className="title-rainbow product-title">{apodData?.title}</h1>
          <div className="news-container">
            <img
              className="astronomy-img"
              src={apodData?.url}
              alt="Astronomy Picture of the Day"
            />

            <p className='news-description astronomy-img'>{apodData?.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpaceNews;
