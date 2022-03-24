import React from 'react'
import {Wrapper, Select} from './styles.js';

const Categories = ({categories, onChange}) => {

  return (

    <Wrapper>
        <h2>Categories</h2>
        <div>
            <Select onChange={onChange}>
            <option value ="" defaultValue>
                Select 
            </option>

            {categories.map(category => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}

            </Select>
        </div>
    </Wrapper>
    
  )
}

export default Categories
