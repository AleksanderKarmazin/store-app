import { request } from './generic.service';

const createProduct = (data) => request({ url: `api/seeds`, method: 'post',  data});
const getProduct = () => request({ url: `api/seeds`, method: 'get'});
  
// By ID
const getProductById = (params) => request({ url: `api/seeds/` + `${params._id}`, method: 'get'});
const deleteProductById = (params) => request({ url: `api/seeds/`+`${params._id}`, method: 'delete'});
const updateProductById = (data, params) => request({ url: `api/seeds/`+`${params._id}`, method: 'put', data});

  
export { 
      getProduct, 
      getProductById, 
      deleteProductById, 
      createProduct, 
      updateProductById,
 };
