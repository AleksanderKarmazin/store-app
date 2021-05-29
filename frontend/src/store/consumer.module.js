import {  
    getConsumer, 
    getConsumerById,
} from '../services/consumer.service'


export default {
    state: {
        consumer: []
    },
    getters: {
        getConsumer: state => {
            return state.consumer;
        }



    },
    mutations: {
        createConsumer (state, payload) {
            state.consumer.push(payload)
          },
        setConsumer (state, payload) {
            state.consumer = payload
        }

    },
    actions: {
        async createAccount({commit, dispatch}, 
            {
                account_currency,
                current_balance,
                financial_goal
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const newAccount = await createAccount({
                    account_currency,
                    current_balance,
                    financial_goal
                  })
                  console.log('New Account in request', newAccount);
                  commit('createAccount', newAccount) 
                  dispatch('getAccount')
                  commit('setLoading', false)
                  return newAccount
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                throw error;
            }
        },
        async getConsumer({commit}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const Consumer = await getConsumer()
                //  = Object.keys(CatigoriesRes).map(key =>({...CatigoriesRes[key], _id:key  }))
                commit('setConsumer', Consumer) 
                commit('setLoading', false)
                return Consumer;
            } catch (error) {                
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)

                throw error;
            }
        }, 
        async getConsumerById({commit}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const ConsumerById = await getConsumerById({_id})
                console.log('Consumer by ID from request', ConsumerById);
                commit('setLoading', false)
                return ConsumerById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        async deleteAccountById({commit, dispatch}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const AccountById = await deleteAccountById({
                    _id
                })
                console.log('Account by ID from request was deleted', AccountById);
                dispatch('getAccount')
                commit('setLoading', false)
                return AccountById;
            } catch (error) {
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                
                throw error;
            }
        },
        async updateAccountById({commit, dispatch}, {
            _id,
            account_currency,
            current_balance,
            financial_goal
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const AccountById = await updateAccountById({
                    account_currency,
                    current_balance,
                    financial_goal
                },{_id})
                  console.log('Account by ID from request was updated', AccountById);

                dispatch('getAccount')
                commit('setLoading', false)
                return AccountById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        async updateBalanceAccountById({commit, dispatch}, {
            _id,
            current_balance,
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const AccountById = await updateBalanceAccountById({
                    current_balance,
                },{_id})
                  console.log('Account by ID from request was updated', AccountById);
                dispatch('getAccount')
                commit('setLoading', false)
                return AccountById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        

    }
};