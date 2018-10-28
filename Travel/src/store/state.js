
 /*
** Create by lijiawei on 2018/10/28
*/

 let defaultCity = '深圳'
 try {
   if (localStorage.city){
     defaultCity  = localStorage.city
   }
 }catch (e){}

 export default {
   city : defaultCity
 }
