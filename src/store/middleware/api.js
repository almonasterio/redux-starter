import axios from 'axios'

const action = {
  type: 'apiCallBegan',
  payload:{
    url:'/bugs',
    method:'get',
    data:{},
    onSuccess:'bugsReceived',
    onError:'apiRequestFailed'
  }
}


const api = async {dispatch}=>next=>action=> {
  if (action.type!=='apiCallBegan') return next(action);
  
  const {url,method,data,onSuccess, onError}=action;
try{
  const response= await axios.request({
    baseURL:'http://localhost:9001/api',
    url,
    method,
    data
  })
  dispatch({type: onSuccess, payload:response.data});
}
catch(error) {
console.log(error)
}
}

export default api;