export const DO_TEST = 'DO_TEST'

export const doTest = (text) => {
  return {
    type: DO_TEST,
    text
  }
}