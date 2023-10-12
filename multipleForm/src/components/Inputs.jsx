import React from 'react'
import useFormContext from '../hooks/useFormContext';
import Shipping from './forms/Shipping';
import OptIn from './forms/OptIn';
import UserInfo from './forms/UserInfo';

const Inputs = () => {

  const { page } = useFormContext();

  const display = {
    0: <UserInfo />,
    1: <Shipping />,
    2: <OptIn />
  };

  const content = (
    <section>
      {display[page]}
    </section>
  )

  return content;
}

export default Inputs
