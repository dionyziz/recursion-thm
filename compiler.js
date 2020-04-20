const compile = (TStr) => {
  const AStrBuilderStr = `(BStr, TStr) => {
    const escape = (str) => {
      return str.replace(
        /\\\\/g, '\\\\\\\\'
      ).replace(
        /\`/g, '\\\\\\\`'
      ).replace(
        /\\\$/g, '\\\\\$'
      )
    }
    return \`() => {
      return {
        BStr: \\\`\${escape(BStr)}\\\`,
        TStr: \\\`\${escape(TStr)}\\\`
      }
    }\`
  }`
  const AStrBuilder = eval(AStrBuilderStr)
  const JSBuilderStr = `(AStr, BStr, TStr) => {
    return \`(SELF => {\${TStr}})((\${BStr})((\${AStr})()))\`
  }`
  const JSBuilder = eval(JSBuilderStr)
  const BStr = `({BStr, TStr}) => {
    const AStr = (${AStrBuilderStr})(BStr, TStr)

    return (${JSBuilderStr})(AStr, BStr, TStr)
  }`
  const AStr = AStrBuilder(BStr, TStr)

  const JSStr = JSBuilder(AStr, BStr, TStr)
  return JSStr
}

const fs = require('fs')
const TStr = fs.readFileSync(0, 'utf-8')
console.log(compile(TStr))
