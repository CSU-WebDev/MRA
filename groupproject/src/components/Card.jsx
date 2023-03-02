import Card from 'react-bootstrap/Card';

function Display() {
  return (
    <>
      {[
        'Success',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title> Wheather Information </Card.Title>
            <Card.Text>
              The wheater condition for this city is
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Display;