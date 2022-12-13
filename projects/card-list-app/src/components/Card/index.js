import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTemplate({ uid, url, title, description }) {
  return (
    <Card className="col-sm-6 col-lg-4 mb-4" data-id={uid}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
}

export default CardTemplate;