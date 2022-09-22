import MaterialCard from "../cards/materialCard/MaterialCard";

const MapOutlet = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      {arr.map((item) => (
        <MaterialCard key={item} />
      ))}
    </div>
  );
};

export default MapOutlet;
