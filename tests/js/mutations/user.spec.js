import test from 'ava-spec'
import { describe } from 'ava-spec'
import { mutations } from "./../../../resources/assets/js/store/modules/user.js"

const { SET_USER } = mutations

describe("User Mutations", it => {
  it('can set the user', t => {
    const testUser = {
      id: 1,
      username: "Syropian"
    }
    const state = {}
    SET_USER(state, testUser)
    t.is(state.user, testUser)
  })
})
