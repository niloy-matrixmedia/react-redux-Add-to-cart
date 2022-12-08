import {ADD_TO_CART} from '../Contance'
export const addToCart =(data)=>{
    console.log(data,'action');
    return{
        type:ADD_TO_CART,
        data:data
    }
}
// export const removeToCart =(data)=>{
//     return{
//         type:'REMOVE_TO_CART',
//         dat:data
//     }
// }