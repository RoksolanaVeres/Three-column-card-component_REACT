import sedanIcon from "../src/assets/icon-sedans.svg";
import luxuryIcon from "../src/assets/icon-luxury.svg";
import suvIcon from "../src/assets/icon-suvs.svg";

export const cardData = [
  {
    id: 1,
    header: "Sedans",
    paragraph:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
    bgColor: "bg-brightOrange",
    buttonTextColor: "text-brightOrange",
    icon: sedanIcon,
  },
  {
    id: 2,
    header: "Suvs",
    paragraph:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    bgColor: "bg-darkCyan",
    buttonTextColor: "text-darkCyan",
    icon: luxuryIcon,
  },
  {
    id: 3,
    header: "Luxury",
    paragraph:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style",
    bgColor: "bg-veryDarkCyan",
    buttonTextColor: "text-veryDarkCyan",
    icon: suvIcon,
  },
];
