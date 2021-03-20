import { useState } from 'react';
import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Col, Row, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill('empty');

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMsg, setWinMsg] = useState('');

  const reloadGame = () => {
    setIsCross(false);
    setWinMsg('');
    itemArray.fill('empty', 0, 9);
  }

  const checkWinner = () => {
     if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMsg(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMsg(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMsg(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMsg(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMsg(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMsg(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMsg(`${itemArray[2]} won`);
    } else {
      checkAllFilled();
    }
  }

  const chagneItem = ItemNumber => {
    if (winMsg) {
      return toast(winMsg, { type: 'success' });
    }
    if (itemArray[ItemNumber] === 'empty') {
      itemArray[ItemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return toast('Already Filled', { type: 'warning' });
    }
    checkWinner();
  }
  const checkAllFilled = () => {
    let count = 0;
    itemArray.forEach(
      (res) => {
        if (res !== 'empty') {
          count++;
        }
      }
    );
    if (count === 9) {
      setWinMsg('Try Again');
    }
  }
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row>
        <Col md="6" className="offset-md-3">
          { winMsg ? (
            <div className="mx-2">
              <h1 className="text-success text-center text-uppercase">
                { winMsg }
              </h1>
              <Button
              color="success" block 
              onClick={reloadGame}
              className="mb-2"
              >
                Reload the Game
              </Button>
            </div>
          ) : (
              <h1 className="text-warning text-center">
                { isCross? 'Cross' : 'Circle' } turns
              </h1>
          ) }
          <div className="grid">
            { itemArray.map((item, index) => (
              <Card onClick={ () => chagneItem(index) }>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            )) }
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
