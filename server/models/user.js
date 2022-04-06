import db from "../config/db.js";

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static findOne({ username }) {
        let sql = `SELECT * FROM Admin_Accounts WHERE user_name = "${username}" AND status_id = "A"`;
        return db.execute(sql);
    }
}

export default User;
