import schema from 'bach-json-schema'
import Ajv from 'ajv'

const ajv = new Ajv()

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'))

export const validate = ajv.compile(schema)

export default validate
