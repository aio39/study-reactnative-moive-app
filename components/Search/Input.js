import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  background-color: white;
  margin: 0px 30px;
  padding: 5px 20px;
  border-radius: 15px;
  margin-bottom: 50px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    placeholder={placeholder}
    returnKeyType={'search'}
  />
);
// returnKeyType을 하면 키보드상에서 서치 마크가 뜸
Input.propTypess = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
