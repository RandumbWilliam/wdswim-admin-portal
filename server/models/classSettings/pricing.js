import db from "../../config/db.js";

class Pricing {
    constructor(leveId, status, duration, price) {
        this.leveId = leveId;
        this.status = status;
        this.duration = duration;
        this.price = price;
    }

    save() {
        let sql = `
            CALL pricingAdd(
                '${this.leveId}',
                '${this.status}',
                '${this.duration}',
                '${this.price}'
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ id}) {
        let sql = `
            CALL pricingSearch(
                '${id}'
            );`
        return db.execute(sql);
    }

    // static fetchSome(contactName, email, phoneNumber) {
    //     let sql = `
    //         CALL accountHoldersSearch(
    //             NULL,
    //             '${contactName}',
    //             '${email}',
    //             '${phoneNumber}'
    //         );`
    //     return db.execute(sql);
    // }

    static fetchAll() {
        let sql = "SELECT * FROM Pricing;";
        return db.execute(sql);
    }
}

export default Pricing;