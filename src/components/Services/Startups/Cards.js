import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="./card/im-2.jpg" className='card-css' />
        <Card.Body>
          <Card.Title>Discover Investors</Card.Title>
          <Card.Text>
            This is a wider card with supporting text 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./card/im-2.png" className='card-css' />
        <Card.Body>
          <Card.Title>Find Prospects</Card.Title>
          <Card.Text>
            This card has supporting text below as
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./card/im-3.jpg" className='card-css' />
        <Card.Body>
          <Card.Title>Market Research</Card.Title>
          <Card.Text>
            This is a wider card with supporting
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./card/im-4.jpg" className='card-css' />
        <Card.Body>
          <Card.Title>Enrich Your Database</Card.Title>
          <Card.Text>
            This is a wider card with supporting 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./card/im-5.jpg" className='card-css' />
        <Card.Body>
          <Card.Title>Monetary Advancement</Card.Title>
          <Card.Text>
            This is a wider card with supporting 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;