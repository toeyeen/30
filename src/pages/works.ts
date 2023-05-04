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
    description: 'Plum was done by Anthony Fu, I liked the idea and  i thought to implement it Excepteur ullamco id ex consectetur qui voluptate in ipsum esse id in. Irure aliqua veniam cupidatat non aliquip sint adipisicing deserunt cupidatat nostrud aute quis dolor exercitation. Exercitation anim qui non dolore aliquip Lorem occaecat. Ea pariatur eu amet ullamco reprehenderit adipisicing. Eiusmod amet aliquip laboris qui qui. Ex incididunt fugiat excepteur officia excepteur amet officia esse aute reprehenderit. Irure qui eiusmod cillum dolore ut enim amet eiusmod consequat laboris consequat in ex qui.',
    source: 'https://github.com/antfu/plum-demo',
  },
  {
    name: 'Password Strength',
    createdAt: '27/04',
  },
  {
    name: 'Snake',
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
