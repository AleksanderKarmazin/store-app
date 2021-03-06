import { request } from './generic.service';

const createAccount = (data) => request({ url: `api/account`, method: 'post',  data});
const getConsumer = () => request({ url: `api/consumer`, method: 'get'});

// By ID
const getConsumerById = (params) => request({ url: `api/consumer/` + `${params._id}`, method: 'get'});
const deleteAccountById = (params) => request({ url: `api/account/`+`${params._id}`, method: 'delete'});
const updateAccountById = (data, params) => request({ url: `api/account/`+`${params._id}`, method: 'put', data});
const updateBalanceAccountById = (data, params) => request({ url: `api/account/balance/`+`${params._id}`, method: 'put', data});

export { 
      getConsumer, 
      getConsumerById, 
      // deleteAccountById, 
      // createAccount, 
      // updateAccountById,
      // updateBalanceAccountById
 };
