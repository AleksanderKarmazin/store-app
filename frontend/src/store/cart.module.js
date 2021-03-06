import {  
    getProductById, 
} from '../services/produst.service'
const cartItemsFromStorege = JSON.parse(localStorage.getItem('cartItems'));
    const cartItems = cartItemsFromStorege 
    ?  cartItemsFromStorege
    :  [] ;

export default {
    state: {
        cartItems: cartItems
    },
    getters: {
        getCartItems: state => {
            return state.cartItems;
        }
    },
    mutations: {
        addCartItem (state, payload) {
            const item = payload
            const existItem = state.cartItems.find(x => x._id === item._id)
            if (existItem) {
                state.cartItems.map(x => x._id === existItem._id ? item : x)
            } else {
                state.cartItems.push(payload)
            }
        },
        removeCartItem (state, payload) {
            const filtredArrCartItems = state.cartItems.filter(x => x._id !== payload)
            state.cartItems = filtredArrCartItems
            // for( var i = 0; i < state.cartItems.length; i++){ 
            //     // console.log(state.cartItems[i]._id);
            //     if ( state.cartItems[i]._id === payload) { 
            //         state.cartItems.splice(i, 1); 
            //     }
            // }
        }
    },
    actions: {
        async addToCart({commit, getters},{_id}) {
            try {
            const ProductById = await getProductById({_id})
            commit('addCartItem', ProductById)
            localStorage.setItem('cartItems', JSON.stringify(getters.getCartItems))
            const fromStorege = localStorage.getItem('cartItems')
            console.log("AFTER ADDING TO STOREGE", fromStorege );  
            } catch (error) {                
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                throw error;
            }

        }, 
        async deleteFromCart({commit, getters}, _id) {
            try {
                commit('removeCartItem', _id )
                localStorage.setItem('cartItems', JSON.stringify(getters.getCartItems))
            } catch (error) {
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                
                throw error;
            }
        }, 
    }
};