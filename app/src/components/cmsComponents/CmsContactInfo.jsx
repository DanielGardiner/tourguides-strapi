import ReactMarkdown from "react-markdown";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CmsContactInfo({ component }) {

  const {
    Address_Line_1: addressLine1,
    Address_Line_2: addressLine2,
    Address_Line_3: addressLine3,
    Address_Line_4: addressLine4,
    Phone_Number: phoneNumber,
    Email: email,
  } = component;

  return (
    <Card className="mt-4 mb-4">
      <Card.Header as="h5">Contact Info</Card.Header>
      <Card.Body>
        <Card.Text>
          {addressLine1 && (<>{addressLine1} < br /></>)}
          {addressLine2 && (<>{addressLine2} < br /></>)}
          {addressLine3 && (<>{addressLine3} < br /></>)}
          {addressLine4 && (<>{addressLine4} < br /></>)}
          {phoneNumber && (<>< br />{phoneNumber} < br /></>)}
          {email && (<>< br />{email}< br /></>)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}





