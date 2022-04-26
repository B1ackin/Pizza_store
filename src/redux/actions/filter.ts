import React from 'react'


const setSortBy = (name: string) => ({
    type: 'SET_SORT_BY',
    payload: name
})

const setCategory = (catIndex: string) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
})

