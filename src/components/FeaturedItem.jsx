import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function FeaturedItem(props) {

    const [showingNutrition, setShowingNutrition] = useState(false);
    
    function updateNutrition() {
        setShowingNutrition(!showingNutrition);
    }

    return <Card>
        <Card.Img src={props.img} width="200" height="200"></Card.Img>
        <Card.Body>

        <Card.Text>{props.name}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Button onClick={updateNutrition}>{showingNutrition ? "Hide Nutrition Facts" : "Show Nutrition Facts"}</Button>
        
        <Table style={{display: showingNutrition ? 'block' : 'none' }}>
            <tbody>
                <tr>
                    <td>"Calories"</td>
                    <td>{props.nutrition.calories}</td>
                </tr>
                <tr>
                    <td>"Fat"</td>
                    <td>{props.nutrition.fat}</td>
                </tr>
                <tr>
                    <td>"Protein"</td>
                    <td>{props.nutrition.protein}</td>
                </tr>
                <tr>
                    <td>"Carbohydrates"</td>
                    <td>{props.nutrition.carbohydrates}</td>
                </tr>
            </tbody>
        </Table>

        </Card.Body>
    </Card>
}