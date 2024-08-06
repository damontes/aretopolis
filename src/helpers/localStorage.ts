export const saveLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value ?? null))
}

export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}
