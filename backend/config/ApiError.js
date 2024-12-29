class ApiError extends Error{
    constructor(
        statusCode,
        massage ="something is wrong in ApiError",
        errors=[],
        stack=""
    ){
        super(massage),
        this.statusCode = statusCode,
        this.data = null,
        this.errors = errors
        this.massage = massage,
        this.success = false
   
    
    // we can ignore this 
    if(stack){
        this.stack = stack
    }else{
        Error.captureStackTrace(this,this.constructor)
    }
}
}

export {ApiError}
