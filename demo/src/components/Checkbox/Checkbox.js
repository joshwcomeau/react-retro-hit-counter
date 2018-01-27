// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  label: React$Node,
  isChecked: boolean,
  onChange: (ev: SyntheticInputEvent<*>) => void,
};

const Checkbox = ({ label, isChecked, onChange }: Props) => {
  return (
    <CheckboxLabel>
      <input type="checkbox" checked={isChecked} onChange={onChange} /> {label}
    </CheckboxLabel>
  );
};

const CheckboxLabel = styled.label`
  /* text-align: center; */
`;

export default Checkbox;
