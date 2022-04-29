import React from 'react'


export const setSortBy = (name: string) => ({
    type: 'SET_SORT_BY',
    payload: name
})

export const setCategory = (catIndex: string) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
})

