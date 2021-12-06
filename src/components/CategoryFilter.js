import React from 'react'
import PropTypes from 'prop-types'
import { classDeclaration } from '@babel/types'

const CATEGORIES = [
  "men's clothing",
  "jewelery",
  "electronics",
  "women's clothing"
]

const CategoryFilter = ({handleFilterChange, className}) => (
  <select name="category" className={className} onChange={handleFilterChange}>
    <option value="ALL">CATEGORIES</option>
    {CATEGORIES.map((item)=> (
      <option key={item} valu={item}>
        {item}
        </option>
    ))}
  </select>
)

