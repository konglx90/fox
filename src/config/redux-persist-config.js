/**
 * @desc [redux store持久化配置]
 */
 import storage from 'redux-persist/lib/storage';

 // redux persist
 const REDUX_PERSIST = {
     active: true,
     storeConfig: {
         key: 'root',
         storage,
         // blacklist: ['nav'],
     }
 };

export default REDUX_PERSIST;
