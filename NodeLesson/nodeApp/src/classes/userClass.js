class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    greeting(){
        console.log("Hello ", this.name)
    }
    sendEmail(context){
        console.log("send email to ", this.email, context)
    }
    unsigning(){
        console.log(`unsigned user ${this.name}`)
    }
}

export default User