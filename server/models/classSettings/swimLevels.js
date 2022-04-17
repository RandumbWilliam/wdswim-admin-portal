import db from "../../config/db.js";

class SwimLevels {
    constructor(name, displayOrder) {
        this.name = name;
        this.displayOrder = displayOrder;
    }

    save() {
        let sql = `
            CALL swimLevelsAdd(
                '${this.name}',
                '${this.displayOrder}'
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ id}) {
        let sql = `
            CALL swimLevelsSearch(
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
        let sql = "SELECT * FROM SwimLevels ORDER BY displayOrder;";
        return db.execute(sql);
    }
}

export default SwimLevels;