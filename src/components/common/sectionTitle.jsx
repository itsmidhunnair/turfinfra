import PropTypes from "prop-types";

/**
 * A component that displays a title with optional centering and color customization.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.title - The title text to display.
 * @param {boolean} [props.center=false] - If true, centers the title text and underline.
 * @param {('light'|'dark')} [props.color='dark'] - The color scheme for the title text.
 * @returns {JSX.Element} The rendered component.
 */
const SectionTitle = ({ title, center, color = "dark" }) => {
  const type = {
    light: "text-white",
    dark: "text-gray-700",
  };

  return (
    <>
      <p
        className={`text-5xl font-semibold uppercase text-gray-700 max-sm:text-3xl ${
          center ? "text-center" : ""
        } ${type[color]}`}
      >
        {title}
      </p>
      <div
        className={`mt-2 w-28 h-1 bg-secondary  ${center ? "mx-auto" : ""}`}
      ></div>
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  center: PropTypes.bool,
  color: PropTypes.oneOf(["light", "dark"]),
};

export default SectionTitle;
