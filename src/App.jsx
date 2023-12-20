import Card from "./components/Card";
import { cardData } from "./data";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 font-lexendDeca">
      <div className="grid text-white lg:grid-cols-3">
        {cardData.map((card) => {
          return (
            <Card
              key={card.header}
              paragraph={card.text}
              header={card.header}
              id={card.id}
            />
          );
        })}
      </div>
    </div>
  );
}
