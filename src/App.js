import './App.css';
import Card from 'react-bootstrap/Card';
import PropItem from './PropItem';
import {PROP_LIST} from './pretendDb';
import Table from 'react-bootstrap/Table';
import PropForm from './PropForm';
import { useState } from 'react';

function App() {
  const [propList, setPropList] = useState(PROP_LIST);

  /**
   * This function will add the prop to the list,
   * but at the moment, nothing is calling it!
   */
  const addProp = (propName) => {
    const newProp = {
      name: propName,
      createdAt: new Date().toLocaleDateString()
    };
    setPropList([ ...propList, newProp ])
  }

  return (
    <div className="app-container">
      <Card className='app-card'>
        <Card.Title className='title'>
          <h2>
            Inception 2 Movie Props
          </h2>
        </Card.Title>
        <Card.Body>
          <PropForm addProp={addProp} />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Prop Item</th>
                <th>Date Added</th>
              </tr>
            </thead>
            {/* The list should populate here! */}
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
