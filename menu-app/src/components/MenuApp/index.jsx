import PropTypes from "prop-types";
import Menu from "../Menu";

const MenuApp = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((menu) => (
          <Menu
            key={menu.menuName}
            menuName={menu.menuName}
            menuItems={menu.menuItems}
          />
        ))}
    </div>
  );
};

MenuApp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      menuName: PropTypes.string.isRequired,
      menuItems: PropTypes.arrayOf(
        PropTypes.shape({
          itemId: PropTypes.number.isRequired,
          itemName: PropTypes.string.isRequired,
          itemPrice: PropTypes.number.isRequired,
          itemDescription: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default MenuApp;
