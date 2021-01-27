import schema from 'bach-json-schema'
import Ajv from 'ajv'

const ajv = new Ajv()

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'))

export const validate = ajv.compile(schema)

export const valid = bach => {
  if (!validate(bach)) {
    const message = 'Invalid Bach.JSON source data'
    const pretty = json => JSON.stringify(json, null, 2)

    console.error(message, pretty(bach))
    console.error(pretty(validate.errors))

    throw TypeError(`Invalid Bach.JSON source data`)
  }

  return bach
}

export default validate
