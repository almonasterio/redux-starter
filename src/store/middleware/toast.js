const toast=store=>next=>action=>{
  if(action.type==='error')
  console.log("Toastify",action.type.message)
  else 
  next(action)

}