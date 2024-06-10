import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CourseItem.css";
function CourseItem({ title, img, text, id }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">
          <Link to={`/course/${id}`} className="buy-btn">
            خرید محصول
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CourseItem;
