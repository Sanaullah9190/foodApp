class ApiResponce{
    constructor(
        statusCode,
        data,
        token,
        massage="success",
    ){
        this.statusCode = statusCode,
        this.massage =massage,
        this.data = data,
        this.token=token
        this.success = statusCode < 400
    }
}

export {ApiResponce}