import { userMutations } from './resources/user/user.schema'

const Mutation = `
  type Mutation {
    ${userMutations}
  }
`
export {
  Mutation
}