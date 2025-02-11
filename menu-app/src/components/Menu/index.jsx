import PropTypes from "prop-types";
import MenuItem from "../MenuItem";

const Menu = ({ menuName, menuItems }) => {
  return (
    <div className="menu">
      <h1>{menuName} Menu</h1>
      <div className="menuItems">
        {menuItems.map((item) => (
          <MenuItem
            key={item.itemId}
            itemId={item.itemId}
            itemPrice={item.itemPrice}
            itemName={item.itemName}
            itemDescription={item.itemDescription}
          />
        ))}
      </div>
    </div>
  );
};
Menu.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.number.isRequired,
      itemName: PropTypes.string.isRequired,
      itemDescription: PropTypes.string,
      itemPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Menu;
