export interface Work {
  name: string
  createdAt: string
  draft?: boolean
  no?: boolean
  description?: string
  source?: string
  excerpt?: string
}

const info: Work[] = [
  {
    name: 'Plum',
    createdAt: '27/04',
    excerpt: 'Plum was done by Anthony Fu, I liked the idea and  i thought to implement it.',
    description: 'Plum was done by Anthony Fu, I liked the idea and  i thought to implement it.',
    source: 'https://github.com/antfu/plum-demo',
  },
  {
    name: 'Password Strength',
    createdAt: '29/04',
    excerpt: 'The main idea of this project it to display users password Strength, and show customers how easy or complex cracking their password with brute force will take.',
    description: 'The main idea of this project it to display users password Strength, and show customers how easy or complex cracking their password with brute force will take. Depending on the complexity of your password it can take months,days, hours,minutes and some even seconds to guess the password. You can go ahead and try it out with and without special characters. I used a package by ZXCVBN for the strength estimator, I have attached the link in the source text below.I can\'t create a project without deliverying my minamilistic UI design, P.S: I had to showcase my good eye for designs. I created an INPUT component with field validation using Vuelidate, It has it inbuilt error highlighting, error message e.t.c. You can check out my codebase for the properities the input component will receives.',
    source: 'https://github.com/dropbox/zxcvbn',
  },
  {
    name: 'Snake',
    createdAt: '02/05',
    excerpt: 'This is a basic snake, Most children from an african background played this game on their parents NOKIA phone while growing up, staying up all night trying to beat your personal records.',
    description: 'This is a basic snake, Most children from an african background played this game on their parents NOKIA phone while growing up, staying up all night trying to beat your personal records. Inspiration is to build something that transcends my up bringing and is relatable to plenty people.',
    source: 'https://play.google.com/store/apps/details?id=com.whiture.apps.classic.snakes&hl=en&gl=US',
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
