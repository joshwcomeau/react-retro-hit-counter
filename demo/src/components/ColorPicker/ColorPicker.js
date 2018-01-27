// @flow
import React from 'react';
import styled from 'styled-components';

import InputLabel from '../InputLabel';

type Props = {
  label: React$Node,
  value: string,
  handleChange: (ev: SyntheticInputEvent<*>) => void,
};

const ColorPicker = ({ label, value, handleChange }) => {
  return (
    <InputLabel label={label}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />{' '}
    </InputLabel>
  );
};

export default ColorPicker;
