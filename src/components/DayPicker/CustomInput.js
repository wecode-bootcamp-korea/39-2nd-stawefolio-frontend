import React, { forwardRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  const [searchParams] = useSearchParams();
  const checkInDate = searchParams.getAll('checkInDate');
  const checkOutDate = searchParams.getAll('checkOutDate');
  let days = 0;
  if (value !== '') {
    const getDate = value.split('-');
    const startDate = new Date(getDate[0]);
    const endDate = new Date(getDate[1]);
    const gapTime = endDate.getTime() - startDate.getTime();
    days = gapTime / (1000 * 60 * 60 * 24);
  }
  return (
    <InputButton onClick={onClick} ref={ref}>
      {value === ''
        ? checkInDate.length === 0 && checkOutDate.length === 0
          ? '날짜를 입력해주세요.'
          : checkInDate + ' - ' + checkOutDate
        : value + ' | ' + days + '박'}
    </InputButton>
  );
});

const InputButton = styled.button`
  border: none;
  width: 400px;
  height: 100px;
  font-size: 16px;
  letter-spacing: 3px;
  font-family: Lato;
  font-weight: bold;
  background-color: transparent;
`;

export default CustomInput;
