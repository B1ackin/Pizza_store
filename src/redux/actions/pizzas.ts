import React from 'react'


export const setPizzas = (items: []) => ({
    type: 'SET_PIZZAS',
    payload: items
})