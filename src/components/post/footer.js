import PropTypes from "prop-types";

export default function Footer({ caption, username }) {
  return (
    <div className="p-4 pt-2 pb-1">
      <span className="mr-1 font-bold mb-3">{username}</span>
      <span className="italic mb-3">{caption}</span>
      <div className='border-t border-gray-primary border-b pb-3 specs'>
        <h4 className="mr-1 font-bold mt-1">PRODUCT DETAILS</h4>
        Set content: 1 Wall art <br />
        Type: Oil Painting <br />
        Colour: White, orange and blue <br />
        Pattern: Abstract Morden Art <br />
        Material: Canvas <br />
        <h4 className="mr-1 font-bold mt-2">Size & Fit </h4>
        Dimension: 60.9 cm x 91.4 cm (Height x Width) <br />
      </div>
    </div>
  );
}

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};