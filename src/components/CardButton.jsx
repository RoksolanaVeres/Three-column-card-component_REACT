export default function Button({ buttonTextColor }) {
  return (
    <button
      className={`${buttonTextColor} rounded-full border-2 border-veryLightGray bg-veryLightGray px-7 py-2 text-base hover:bg-transparent hover:text-veryLightGray`}
    >
      Learn More
    </button>
  );
}
