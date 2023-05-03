
import Card from "react-bootstrap/Card";

export default function Specialised() {
  return (
    <>
      <h1 className="text-center p-5">We Specialised in Intimate Catering</h1>
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1">
          <div className="col">
            <Card >
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg" />
              <Card.Body>
                <Card.Title>Corporate Events</Card.Title>
                <Card.Text>

                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card >
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg" />
              <Card.Body>
                <Card.Title>Weddings And Galas </Card.Title>
                <Card.Text>

                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card >
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg" />
              <Card.Body>
                <Card.Title>Special Events</Card.Title>
                <Card.Text>

                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card >
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/lifestyle-people-learning-make-sushi_23-2149865330.jpg" />
              <Card.Body>
                <Card.Title>Cooking Classes</Card.Title>
                <Card.Text>

                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
