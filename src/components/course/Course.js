import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 function Course({title,img,text,telegramLink}){
    return(
        <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <a href={`https://t.me/${telegramLink}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">اطلاعات بیشتر</Button>
          </a>
        </Card.Body>
      </Card>
    )
}
export default Course