import React from 'react'
import useFormContext from '../hooks/useFormContext';
import Shipping from './inputs/Shipping';
import OptIn from './inputs/OptIn';
import UserInfo from './inputs/UserInfo';

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
