import React from 'react'

const Shipping = () => {
  return (
    <div className="formInputs">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="shipFirstName"
        pattern="([A-Z])[\w+.]{1,}"
        value={data.shipFirstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="shipLastName"
        pattern="[\w+.]{2,}"
        value={data.shipLastName}
        onChange={handleChange}
      />
      <label htmlFor="address1">Address 1</label>
      <input
        type="text"
        id="address1"
        name="shipAddress1"
        pattern="[\w\d\s.#]{2,}"
        value={data.shipAddress1}
        onChange={handleChange}
      />
      <label htmlFor="address2">Address 2</label>
      <input
        type="text"
        id="address2"
        name="shipAddress2"
        pattern="[\w\d\s.#]{2,}"
        value={data.shipAddress2}
        onChange={handleChange}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="shipCity"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.shipCity}
        onChange={handleChange}
      />
      <label htmlFor="state">State</label>
      <select
        id="state"
        name="shipState"
        value={data.shipState}
        onChange={handleChange}
      >
        <option value="AL">Alabama</option>
      </select>
      <label htmlFor="zipCode">Zip Code</label>
      <input
        type="text"
        id="zipCode"
        name="shipZipCode"
        pattern="[0-9]{5}"
        maxLength="5"
        value={data.shipZipCode}
        onChange={handleChange}
      />
    </div>
  );
}

export default Shipping
