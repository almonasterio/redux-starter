

const logger= param=>store=> next=> action=>{
  console.log("Logging in",param)
  console.log("store",store)
  console.log("next",next)
  console.log("action",action)
next(action)

}

export default logger;