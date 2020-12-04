import { TransactionService } from '../resources'

const transactionModule = {
  namespaced: true,
  state: {
    transactions: []
  },
  mutations: {
    SET_TRANSACTION (state, transactions) {
      state.transactions = transactions
    }
  },
  actions: {
    setTransaction ({ commit, state }, transactions) {
      console.log(state.transactions);
      commit('SET_TRANSACTION', transactions)
    },
    async listTransaction({ commit, state }) {
      const result = await TransactionService.listTransaction()
     // state.transactions = result.data
      console.log(state.transactions);
      commit('SET_TRANSACTION', result.data)
    }
  },
  getters: {
    getTransaction (state) {
      return state.transactions
    }
  }
}

export default transactionModule
