import { request } from './generic.service';


const getUsers = () => request({ url: `api/users`, method: 'get'});

// By ID
const getUserById = (params) => request({ url: `api/users/` + `${params._id}`, method: 'get'});
const deleteUserById = (params) => request({ url: `api/users/`+`${params._id}`, method: 'delete'});
const updateUserById = (data, params) => request({ url: `api/users/`+`${params._id}`, method: 'put', data});


export { 
      getUsers, 
      getUserById, 
      deleteUserById, 
      updateUserById,
 };
