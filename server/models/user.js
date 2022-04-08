import db from "../config/db.js";

class User {
    constructor(firstName, lastName, email, password, stat, level, createdBy) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.stat = stat;
        this.level = level;
        this.createdBy = createdBy;
    }

    save() {
        let sql = `
            CALL adminAccountsAdd(
                '${this.email}',
                '${this.password}',
                '${this.firstName}',
                '${this.lastName}',
                '${this.stat}',
                '${this.level}',
                '${this.createdBy}'
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ email }) {
        let sql = `SELECT * FROM AdminAccounts WHERE email = "${email}" AND status = "A"`;
        return db.execute(sql);
    }

    static fetchAll() {
        let sql = "SELECT * FROM AdminAccounts;";
        return db.execute(sql);
    }
}

export default User;
