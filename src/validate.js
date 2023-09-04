import schema from 'bach-json-schema'
import Ajv from 'ajv'

const ajv = new Ajv({ strictTuples: false, code: { es5: true }, unicodeRegExp: false })

schema.$id = 'http://codebach.tech/bach.json'

export const validate = ajv.compile(schema)

export const valid = bach => {
  if (!validate(bach)) {
    // TEMP: Disabled to debug potential memory leaks stemming from ajv
    // const message = 'Invalid Bach.JSON source data'
    // const pretty = json => JSON.stringify(json, null, 2)

    // console.error(message, pretty(bach))
    // console.error(pretty(validate.errors))

    throw TypeError(`Invalid Bach.JSON source data`)
  }

  return bach
}

export default { validate, valid }
