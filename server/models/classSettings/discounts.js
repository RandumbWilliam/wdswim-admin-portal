import db from "../config/db.js";

class Discounts {
    constructor(description, percentage) {
        this.description = description;
        this.percentage = percentage;
    }

    save() {
        let sql = `
            CALL adminAccountsAdd(
                '${this.description}',
                '${this.percentage}'
            );
        `;
        
        return db.execute(sql);
    }

    // static findOne({ email }) {
    //     let sql = `SELECT * FROM AdminAccounts WHERE email = "${email}" AND status = "A"`;
    //     return db.execute(sql);
    // }

    static fetchAll() {
        let sql = "SELECT * FROM Discounts;";
        return db.execute(sql);
    }
}

export default Discounts;