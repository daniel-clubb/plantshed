import "./NewEdition.css";
import newEditionImg from "../images/new-edition.svg";

function NewEdition() {
  return (
    <div class="new-edition">
      <div className="new-edition-product">
        <h4 className="new-edition-product-title">New Edition</h4>
        <p className="new-edition-product-info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="new-edition-product-view-btn">View Product</button>
      </div>

      <img
        src={newEditionImg}
        className="new-edition-product-img"
        alt="product"
      />
    </div>
  );
}

export default NewEdition;
