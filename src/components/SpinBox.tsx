/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import useLongPress from './useLongPress';

interface SpinBoxProps {
  count: number;
  onPressUp: (count: number) => void;
  onPressDown: (count: number) => void;
}

const SpinBox = (props: SpinBoxProps) => {
  const { count, onPressDown, onPressUp } = props;

  const onLongPress = (type: string) => {
    console.log('longpress is triggered');
    if (type === 'down') {
      onPressDown(count - 2);
    } else if (type === 'up') {
      onPressUp(count + 2);
    }
  };

  const onClick = (type: string) => {
    console.log('click is triggered');
    if (type === 'down') {
      onPressDown(count - 1);
    } else if (type === 'up') {
      onPressUp(count + 1);
    }
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEventDown = useLongPress(
    () => onLongPress('down'),
    () => onClick('down'),
    defaultOptions,
  );
  const longPressEventUp = useLongPress(
    () => onLongPress('up'),
    () => onClick('up'),
    defaultOptions,
  );

  return (
    <Container>
      <Button {...longPressEventDown}>-</Button>
      <Counter>{count}</Counter>
      <Button {...longPressEventUp}>+</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 160px;
`;

const Button = styled.button`
  flex: 1;
  width: 40px;
  background-color: gray;
  cursor: pointer;
`;

const Counter = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SpinBox;
