export const ADD_FILTER = 'ADD_FILTER',
    REMOVE_FILTER = 'REMOVE_FILTER',
    CLEAR_FILTER = 'CLEAR_FILTER'


export const addFilter = (filter) => ({
    type:ADD_FILTER,
    payload:filter
})

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    payload:filter
})

export const clearFilter = {
    type:CLEAR_FILTER
}