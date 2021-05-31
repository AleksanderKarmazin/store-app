import {  
    getUsers, 
    getUserById, 
    deleteUserById, 
    updateUserById,
} from '../services/usersAll.service'


export default {
    state: {
        users: []
    },
    getters: {
        getUsers: state => {
            return state.users;
        }
    },
    mutations: {
        setUsers (state, payload) {
            state.users = payload
        }

    },
    actions: {
        async getUsers({commit}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const Users = await getUsers()
                //  = Object.keys(CatigoriesRes).map(key =>({...CatigoriesRes[key], _id:key  }))
                commit('setUsers', Users) 
                commit('setLoading', false)
                return Users;
            } catch (error) {                
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                throw error;
            }
        }, 
        async getUserById({commit}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const UserById = await getUserById({_id})
                console.log('User by ID from request', UserById);
                commit('setLoading', false)
                return UserById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        async deleteUserById({commit, dispatch}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const UserById = await deleteUserById({
                    _id
                })
                console.log('User by ID from request was deleted', UserById);
                dispatch('getUsers')
                commit('setLoading', false)
                return UserById;
            } catch (error) {
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                
                throw error;
            }
        },
        async updateUserById({commit, dispatch}, {
            _id,
            account_currency,
            current_balance,
            financial_goal
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const UserById = await updateUserById({
                    account_currency,
                    current_balance,
                    financial_goal
                },{_id})
                  console.log('Product by ID from request was updated', UserById);

                dispatch('getUsers')
                commit('setLoading', false)
                return UserById;
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