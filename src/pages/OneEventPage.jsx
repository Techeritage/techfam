import { useLocation } from "react-router-dom";

const OneEventPage = () => {
  const location = useLocation();
  const eventData = location.state.eventData;
  console.log(eventData);
  return (
    <div>
      <h1>{eventData.title}</h1>
    </div>
  )
}

export default OneEventPage;
