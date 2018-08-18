const userTypes = `
  # User definition type
  type User {
    id: ID!
    name: String!
    email: String!
    photo: String
    createAt: String!
    updatedAt: String!
  }

  input UserCreateInput {
    name: String!
    email: String!
    passowrd: String!
  }

  input UserUpdateInput {
    name: String!
    email: String!
    photo: String!
  }

  input UserUpdatePasswordInput {
    password: String!
  }
`

const userQueries = `
  users(first: Int, offset: Int): [ User! ]!
  user(id: ID!): User
`

const userMutations = `
  createUser(input: UserCreateInput!): User
  updateUser(id: ID!, input: UserUpdateInput!): User
  updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): User
  deleteUser(id: ID!): Boolean
`

export {
  userTypes,
  userQueries,
  userMutations
}