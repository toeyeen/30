export interface Work {
  name: string
  createdAt: string
  draft?: boolean
  no?: boolean
  description?: string
  source?: string
}

const info: Work[] = [
  {
    name: 'Plum',
    createdAt: '27/04',
    description: 'Plum was done by Anthony Fu, I liked the idea and  i thought to implement it',
  },
  {
    name: 'Password Strength',
    createdAt: '27/04',
  },
  {
    name: 'Pj 3',
    createdAt: '27/04',
  },
  {
    name: 'Pj 4',
    createdAt: '27/04',
  },
  {
    name: 'Pj 5',
    createdAt: '27/04',
  },
  {
    name: 'Pj 6',
    createdAt: '27/04',
  },
  {
    name: 'Pj 7',
    createdAt: '27/04',
  },
  {
    name: 'Pj 8',
    createdAt: '27/04',
  },
]

export const works = info.map((item, idx) => {
  return {
    ...item,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
