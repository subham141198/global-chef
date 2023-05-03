/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SingleRecipeComponent(props) {
    console.log(props)
    return (
        <div className="col">
            <Card>
                <Card.Img variant="top" height={300} src={props.recipe.banner_image} />
                <Card.Body>
                    <h2>{props.recipe.name}</h2>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                    <Card.Header>Ingredients</Card.Header>

                    <ul>
                        {props.recipe.ingredients.map((ingredient, index) => (
                            <li className="ingredientItems" key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Card.Header>Method</Card.Header>
                    <ul>
                        {props.recipe.recipe_method.split("\n").map((method, index) => (
                            <li key={index}>{method}</li>
                        ))}
                    </ul>
                    </ListGroup.Item>
                    </ListGroup>

                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SingleRecipeComponent;