import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function PropForm({ addProp }) {
  const [propName, setPropName] = useState('');

  const addPropToList = () => {
    // ADD CODE HERE TO ADD THE PROP TO THE LIST! //


    //// DON'T TOUCH THE CODE BELOW /////
    setPropName('');
  }

  return (
    <Form>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter prop name..."
          onChange={(e) => setPropName(e.target.value)}
          value={propName}
        />
        <InputGroup.Text type='submit' onClick={(e) => addPropToList()}>Add Prop</InputGroup.Text>
      </InputGroup>
    </Form>
  );
}

export default PropForm;