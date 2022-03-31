import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <div className="header">Filter</div>
      <div className="contents">
        <div className="origin option">Origin</div>
        <div className="size option">Size</div>
        <div className="lvl-of-care option">Level of Care</div>
      </div>
      <div className="footer">Search</div>
    </div>
  );
}

export default Filter;
