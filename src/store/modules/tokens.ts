import { getTokens } from '@/api/axios/coinlist.api'
import { IToken } from '@/types'


export interface TokensState {
  tokens: Array<IToken>
}

const state: TokensState = {
  tokens: []
}
const mutations = {
  setTokens(state: TokensState, tokens: Array<IToken>) {
    state.tokens = tokens
  }
}
const actions = {
  async fetchTokens({ commit }) {
    const tokens = await getTokens()
    commit('setTokens', Object.values(tokens.data))
  }
}
const getters = {
  tokens: (s: TokensState) => s.tokens
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}