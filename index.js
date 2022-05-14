const log = require('./modules/log.js');

class user {
    constructor(user, email) {
        this.user = user;
        this.email = email;
        return console.log("Added, " + user + " with the email, " + email);
    }
    getemail() {
        return console.log(this.email);
    }
    getuser() {
        return console.log(this.user);
    }
    changeEmail(newemail) {
        this.email = newemail;
        return console.log("Changed the email to, " + newemail);
    }
    changeusername(newusername) {
        this.user = newusername;
        return console.log("Changed the username to, " + newusername);
    }
}