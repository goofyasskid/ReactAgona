import PromoCard from "../cards/promoCard/PromoCard";

const PromoOutlet = () => {
  const arr = [1, 2, 3];
  return (
    <div>
      {arr.map((item) => (
        <PromoCard key={item} />
      ))}
    </div>
  );
};

export default PromoOutlet;
