import React from 'react'
import useFormContext from '../../hooks/useFormContext';

const UserInfo = () => {

  const { data, handleChange } = useFormContext();

  return (
    <div className="formInputs">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name='userFirstName'
        pattern="([A-Z])[\w+.]{1,}"
        value={data.userFirstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name='userLastName'
        pattern="[\w+.]{2,}"
        value={data.userLastName}
        onChange={handleChange}
      />
      <label htmlFor="address1">Address 1</label>
      <input
        type="text"
        id="address1"
        name="userAddress1"
        pattern="[\w\d\s.#]{2,}"
        value={data.userAddress1}
        onChange={handleChange}
      />
      <label htmlFor="address2">Address 2</label>
      <input
        type="text"
        id="address2"
        name="userAddress2"
        pattern="[\w\d\s.#]{2,}"
        value={data.userAddress2}
        onChange={handleChange}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="userCity"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.userCity}
        onChange={handleChange}
      />
      <label htmlFor="state">State</label>
      <select
        id="state"
        name="userState"
        value={data.userState}
        onChange={handleChange}
      >
        <option value="AL">Alabama</option>
        <option value="AT">Atlas</option>
      </select>
      <label htmlFor="zipCode">Zip Code</label>
      <input
        type="text"
        id="zipCode"
        name="userZipCode"
        pattern="[0-9]{5}"
        maxLength="5"
        value={data.userZipCode}
        onChange={handleChange}
      />
    </div>
  );
}

export default UserInfo
