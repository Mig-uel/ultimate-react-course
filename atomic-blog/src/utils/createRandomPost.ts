import { faker } from '@faker-js/faker'
import type * as types from '../types'

export function createRandomPost(): types.Post {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  }
}
