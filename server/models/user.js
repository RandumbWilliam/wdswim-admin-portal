import db from "../config/db.js";

class User {
    constructor(firstName, lastName, email, password, stat, level) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.stat = stat;
        this.level = level;
    }

    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
            INSERT INTO Admin_Accounts(
                firstName,
                lastName,
                email,
                password,
                stat,
                level,
                created_by,
                created_on
            )
            VALUES(
                '${this.firstName}',
                '${this.lastName}',
                '${this.email}',
                '${this.password}',
                '${this.stat}',
                '${this.level}',
                '${createdAtDate}',
            )
        `;

        return db.execute(sql);
    }

    static findOne({ username }) {
        let sql = `SELECT * FROM Admin_Accounts WHERE user_name = "${username}" AND status_id = "A"`;
        return db.execute(sql);
    }

    static fetchAll() {
        let sql = "SELECT * FROM Admin_Accounts;";
        return db.execute(sql);
    }
}

export default User;
