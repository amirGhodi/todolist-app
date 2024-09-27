import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Filter = ({ filter, setFilter }) => {
  return (
    <ButtonGroup className="mt-3">
      <Button variant={filter === 'all' ? 'primary' : 'light'} onClick={() => setFilter('all')}>
        All
      </Button>
      <Button variant={filter === 'completed' ? 'primary' : 'light'} onClick={() => setFilter('completed')}>
        Completed
      </Button>
      <Button variant={filter === 'pending' ? 'primary' : 'light'} onClick={() => setFilter('pending')}>
        Pending
      </Button>
    </ButtonGroup>
  );
};

export default Filter;
