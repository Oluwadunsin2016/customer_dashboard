
const Cards = () => {
  const cardData = [
    {
      title: "Total Balance",
      value: "$10,000",
      color: "to-blue-500 from-blue-100", // Gradient for Total Balance
    },
    {
      title: "Total Income",
      value: "$5,000",
      color: "to-green-500 from-green-100", // Gradient for Total Income
    },
    {
      title: "Total Spending",
      value: "$2,000",
      color: "to-red-500 from-red-100", // Gradient for Total Spending
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg border text-white bg-gradient-to-b ${card.color}`}
        >
          <h2 className="text-lg font-semibold">{card.title}</h2>
          <p className="text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;