import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ItemContext } from "../../_context/ItemProvider";
import { useContext, useEffect } from "react";

function CardComp({ title, price, description, img, id }) {

  // const itemsArray =  [ {count: 1, id: 1 }, {count: 0, id: 2}, {count: 4, id: 4}, {count: 5, id: 6}]
  
  const { setItemCounts, itemsArray, setItemsArray } = useContext(ItemContext);

  const cartChecker = (id) => {
    let index = itemsArray.findIndex((element) => element.id === id);
    console.log("index", index);
    // if the item already exists in the array
    if (index !== -1) {
      const updatedItemArray = [...itemsArray];
      updatedItemArray[index].count += 1;
      setItemsArray(updatedItemArray);
    }
    // else if the item dosn't exist in the array then append it in the existing array
    else {
      setItemsArray((prev) => [...prev, { count: 0, id: id }]);
    }
  };

  useEffect(() => {
    console.log("itemArray", itemsArray);
  }, [itemsArray]);
  return (
    <Card style={{ width: "18rem", height: "40rem" }}>
      <Card.Img variant="top" src={img} height={350} />
      <Card.Body>
        <div className="cardbutton">
          <Card.Title>{title}</Card.Title>
        </div>
        <Card.Text
          style={{ overflow: "hidden", maxHeight: "7rem", overflowY: "auto" }}
        >
          {description}
        </Card.Text>
        <div className="cardbutton">
          <Button
            variant="primary"
            onClick={() => {
              setItemCounts((prevItem) => prevItem + 1);
              cartChecker(id);
            }}
          >
            Add to cart
          </Button>
          <Card.Text>${price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
