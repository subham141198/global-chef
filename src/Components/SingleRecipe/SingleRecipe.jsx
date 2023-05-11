/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { toast } from "react-toastify";
import { useState } from "react"

function SingleRecipeComponent(props) {

    const [addtofavButton, setaddtofavButton] = useState(false)
    function handleFav(event) {
        const existingFavRecipes = JSON.parse(localStorage.getItem("favRecipe")) || []
        const ifAlreadyExists = existingFavRecipes.some((existingFavRecipe) => existingFavRecipe.id === props.recipe.id)
        console.log(ifAlreadyExists)
        if (!ifAlreadyExists) {
            localStorage.setItem("favRecipe",JSON.stringify([props.recipe, ...existingFavRecipes]))
            toast.success("added to Fav", {
                position: toast.POSITION.TOP_RIGHT
            })
            event.target.disabled = true
        } else {
            toast.warning("added to Fav", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

    }

    return (
        <>
            <div className="col">

                <Card>
                    <Card.Img variant="top" height={300} src={props.recipe.banner_image} />
                    <Card.Body>
                        <h2>{props.recipe.name}</h2>
                        <Card.Text><strong>Rating: </strong>{props.recipe.rating}/10</Card.Text>
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
                                <ul className='recipe-method'>
                                    {props.recipe.recipe_method.split("\n").map((method, index) => (
                                        <li key={index}>{method}</li>
                                    ))}
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>

                        <Button variant="warning" onClick={handleFav}>Add To Favourite</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default SingleRecipeComponent;