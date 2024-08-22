export const Dropdown = ({ name, setDropDisplay }) => {
  return (
    <div className="menu-level">
      <div
        onMouseEnter={() => setDropDisplay(true)}
        onMouseLeave={() => setDropDisplay(false)}
        className="menu-item"
      >
        <a>{name}</a>
      </div>
    </div>
  );
};
