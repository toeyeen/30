export * from './vector'
export * from './canvas'

export function removeEmptyProp<T extends object>(obj: T): Partial<T> {
  return Object.keys(obj).reduce((acc, key) => {
    // @ts-expect-error  Object is not empty
    if (obj[key] !== undefined && obj[key] !== null)
    // @ts-expect-error  Object is not empty
      acc[key] = obj[key]

    return acc
  }, {} as Partial<T>)
}
