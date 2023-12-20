import { SedanIcon, LuxuryIcon, SuvIcon } from "./Icons";
import CardButton from "./CardButton";

export default function Card({ header, paragraph, id }) {
  let isSedan = id === 1;
  let isSuv = id === 2;
  let isLuxury = id === 3;

  return (
    <div
      className={`${isSedan && "bg-brightOrange"} ${isSuv && "bg-darkCyan"} ${
        isLuxury && "bg-veryDarkCyan"
      }  max-w-96 p-12 first:rounded-tl-xl first:rounded-tr-xl last:rounded-bl-xl last:rounded-br-xl lg:max-w-72 lg:first:rounded-bl-xl lg:first:rounded-tr-none lg:last:rounded-bl-none lg:last:rounded-tr-xl`}
    >
      {isSedan && <SedanIcon />}
      {isSuv && <SuvIcon />}
      {isLuxury && <LuxuryIcon />}

      <h1 className="py-10 font-bigShouldersDisplay text-4xl uppercase text-veryLightGray">
        {header}
      </h1>
      <p className="pb-8 text-sm font-normal leading-relaxed text-transparentWhite">
        {paragraph}
      </p>
      <CardButton color={id} />
    </div>
  );
}
