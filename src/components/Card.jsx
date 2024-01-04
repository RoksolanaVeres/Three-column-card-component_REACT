import CardButton from "./CardButton";

export default function Card({ header, paragraph, id, className, icon }) {
  return (
    <div
      className={`${className} max-w-96 p-12 first:rounded-tl-xl first:rounded-tr-xl last:rounded-bl-xl last:rounded-br-xl lg:max-w-72 lg:first:rounded-bl-xl lg:first:rounded-tr-none lg:last:rounded-bl-none lg:last:rounded-tr-xl`}
    >
      <img src={icon} alt={`${header} icon`} />
      <h1 className="py-10 font-bigShouldersDisplay text-4xl uppercase text-veryLightGray">
        {header}
      </h1>
      <p className="pb-16 text-sm font-normal leading-relaxed text-transparentWhite">
        {paragraph}
      </p>
      <CardButton color={id} />
    </div>
  );
}
