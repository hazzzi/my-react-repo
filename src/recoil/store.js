import { atom } from 'recoil'

export const problemsState = atom({
    key: 'problemsState',
    default: [],
})

export const similarsState = atom({
    key: 'similarsState',
    default: [],
})

export const selectedProblemState = atom({
    key: 'selectedProblemState',
    default: undefined,
})
