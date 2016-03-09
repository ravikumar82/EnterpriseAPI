try {
   if ((request.queryParam.store == undefined)) {
     throw '"postalcode" and "country" query parameters are required';
   }
}
   catch (err) {
    // Handle any error that may have happened previously by generating a response
   // response.content.asJSON.error = err;
}
//
//if (context.flow=="PROXY_REQ_FLOW") {
//     var woeid = context.getVariable("request.queryParam.store");
//     context.setVariable("store", woeid);
//}
   