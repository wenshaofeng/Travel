
 /*
** Create by lijiawei on 2018/10/28
*/
 export default {
   changeCity(state,city){
     state.city = city
     try {
       if (localStorage.city){
         localStorage.city = city
       }
     }catch  (e){}
   }
 }
