// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string,
  children: React$Node,
};

const InputLabel = ({ label, children, ...delegated }: Props) => (
  <div>
    <LabelText {...delegated}>{label}</LabelText>
    {children}
  </div>
);

const LabelText = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: Courier New, monospaced;
  font-weight: bold;
`;

export default InputLabel;
