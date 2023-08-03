function Validation(values){
    let error={}

    if(!values.name){
        error.name="Name Requried"
    }else if(values.name.length){
        error.name="vslue more than 5 char"
    }

    if(!values.email){
        error.name="Name Requried"
    }else if(values.email.length){
        error.name="vslue more than 5 char"
    }

    if(!values.password){
        error.name="Name Requried"
    }else if(values.password.length){
        error.name="vslue more than 5 char"
    }

    return error;
}

export default Validation;