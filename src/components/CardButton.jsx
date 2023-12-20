export default function Button({ color }) {
  let isOrange = color === 1;
  let isCyan = color === 2;
  let isDarkCyan = color === 3;
  return (
    <button
      className={`${isOrange && "text-brightOrange"} ${
        isCyan && "text-darkCyan"
      }  ${
        isDarkCyan && "text-veryDarkCyan"
      } rounded-full border-2 border-veryLightGray bg-veryLightGray px-7 py-2 text-base hover:bg-transparent hover:text-veryLightGray`}
    >
      Learn More
    </button>
  );
}
