import CategoryIcon from "../../components/category-icon/CategoryIcon";

function Homepage() {
  const categories = [
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Mobiles",
    },
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Men",
    },
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Women",
    },
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Mobiles",
    },
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Men",
    },
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Women",
    },
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Mobiles",
    },
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Men",
    },
    {
      icon: "https://rukminim1.flixcart.com/flap/128/128/image/1686808e362b885c.png?q=100",
      title: "Women",
    },
  ];
  return (
    <div className="flex-col px-4">
      <div
        className="flex-row justify-evenly"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {/* key helps react to know which elements changed which helps dom tree
        to update */}
        {categories.map((category, index) => (
          <CategoryIcon
            key={index}
            icon={category.icon}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
