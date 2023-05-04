import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ShingleChef(porps) {
 

  return (
    <div className="col">
      <Card>
        <Card.Img variant="top" src={porps.chefdata.profile_picture} />
        <Card.Body>
          <Card.Title>{porps.chefdata.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><span className="fw-bold" >Experience: </span>{porps.chefdata.year_of_experience} </ListGroup.Item>
          <ListGroup.Item><span className="fw-bold" >Likes: </span>{porps.chefdata.likes} </ListGroup.Item>
          <ListGroup.Item><span className="fw-bold" >Recipies: </span>{porps.chefdata.no_of_recipes} </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link className="btn btn-warning" href={'/details/'+ porps.chefdata.id }>View Recipes</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShingleChef;
