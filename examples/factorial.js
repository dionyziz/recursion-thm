return (n) => {
  if (n == 0) {
    return 1
  }
  return n * eval(SELF)(n - 1)
}
