import {  
    getProduct, 
    getProductById, 
    deleteProductById, 
    createProduct, 
    updateProductById,
} from '../services/produst.service'


export default {
    state: {
        products: []
    },
    getters: {
        getProduct: state => {
            return state.products;
        }



    },
    mutations: {
        createProduct (state, payload) {
            state.products.push(payload)
          },
        setProduct (state, payload) {
            state.products = payload
        }

    },
    actions: {
        async createProduct({commit, dispatch}, 
            {
                account_currency,
                current_balance,
                financial_goal
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const newProduct= await createProduct({
                    account_currency,
                    current_balance,
                    financial_goal
                  })
                  console.log('New newProduct in request', newProduct);
                  commit('createAccount', newProduct) 
                  dispatch('getProduct')
                  commit('setLoading', false)
                  return newProduct
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                throw error;
            }
        },
        async getProduct({commit}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const Product = await getProduct()
                //  = Object.keys(CatigoriesRes).map(key =>({...CatigoriesRes[key], _id:key  }))
                commit('setProduct', Product) 
                commit('setLoading', false)
                return Product;
            } catch (error) {                
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)

                throw error;
            }
        }, 
        async getProductById({commit}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const ProductById = await getProductById({_id})
                console.log('Product by ID from request', ProductById);
                commit('setLoading', false)
                return ProductById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        async deleteProductById({commit, dispatch}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const ProductById = await deleteProductById({
                    _id
                })
                console.log('Product by ID from request was deleted', ProductById);
                dispatch('getProduct')
                commit('setLoading', false)
                return ProductById;
            } catch (error) {
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                
                throw error;
            }
        },
        async updateProductById({commit, dispatch}, {
            _id,
            account_currency,
            current_balance,
            financial_goal
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const ProductById = await updateProductById({
                    account_currency,
                    current_balance,
                    financial_goal
                },{_id})
                  console.log('Product by ID from request was updated', ProductById);

                dispatch('getProduct')
                commit('setLoading', false)
                return ProductById;
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