import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";

const CardDetails = () => {
  const [card, setCard] = useState({});
  const cardData = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const findData = cardData.find((data) => data.id === parseInt(id));
    setCard(findData);
  }, [id, cardData]);
  return (
    <div>
      <CardDetail card={card}></CardDetail>
    </div>
  );
};

export default CardDetails;
