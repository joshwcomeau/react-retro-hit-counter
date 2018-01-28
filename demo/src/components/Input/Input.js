// @flow
import React from 'react';
import styled from 'styled-components';

import InputLabel from '../InputLabel';

type Props = {
  label: React$Node,
  type?: 'text' | 'number' | 'color',
  value: string,
  onChange: (ev: SyntheticInputEvent<*>) => void,
};

const Input = ({ label, type = 'text', value, onChange }: Props) => {
  return (
    <InputLabel label={label}>
      <InputElem type={type} value={value} onChange={onChange} />
    </InputLabel>
  );
};

const InputElem = styled.input`
  display: block;
  height: 28px;
  width: 100%;
`;

export default Input;
