import db from "../../config/db.js";

class OtherFees {
    constructor(description, displayOrder, price) {
        this.description = description;
        this.displayOrder = displayOrder;
        this.price = price;
    }

    save() {
        let sql = `
            CALL otherFeesAdd(
                '${this.description}',
                '${this.displayOrder}',
                '${this.price}'
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ id}) {
        let sql = `
            CALL otherFeesSearch(
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
        let sql = "SELECT * FROM OtherFees;";
        return db.execute(sql);
    }
}

export default OtherFees;