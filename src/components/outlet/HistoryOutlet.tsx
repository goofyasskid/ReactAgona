import HistoryCard from "../cards/historyCard/HistoryCard";

const HistoryOutlet = () => {
  const arr = [1, 2];
  return (
    <div>
      {arr.map((item) => (
        <HistoryCard key={item} />
      ))}
    </div>
  );
};

export default HistoryOutlet;
