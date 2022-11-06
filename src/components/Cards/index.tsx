import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const key =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZhMTY1MDgwLTA1ZDEtNDQyZS1iZTUwLWEzNmY3NGE1YzdkNiIsImlhdCI6MTY2Nzc2MTAzOCwic3ViIjoiZGV2ZWxvcGVyL2I3ZmNlMmVlLWMzMzctMTRiMC01NzdiLTU5OWMyMTExMzJhZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDcuMjQ4LjIxNC4xOTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.pTENxI907TOLXs-tut5PrwxSnwzMlEQRFkVRhRtFKrtK_zETf1F4UFxabjFPqorxFGqgkHnPgm4XoTodD6875Q";
  const header = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + key,
    Accept: "*/*",
  };

  const getData = async () => {
    const url = `https://api.clashroyale.com/v1/cards?limit=200`;
    const response = await fetch(url, { headers: header });
    const data = await response.json();
    setCards(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {cards.map((carta: any) => (
        <p>{carta.name}</p>
      ))}
    </div>
  );
};

export default Cards;
