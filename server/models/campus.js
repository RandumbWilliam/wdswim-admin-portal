import db from "../config/db.js";

class Campus {
    constructor(campusName, status) {
        this.campusName = campusName;
        this.status = status;
    }

    save() {
        let sql = `
            CALL campusAdd(
                '${this.campusName}',
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ id}) {
        let sql = `
            CALL campusSearch(
                '${id}'
            );`
        return db.execute(sql);
    }

    // static fetchSome(contactName, email, phoneNumber) {
    //     let sql = `
    //         CALL locationSearch(
    //             NULL,
    //             '${contactName}',
    //             '${email}',
    //             '${phoneNumber}'
    //         );`
    //     return db.execute(sql);
    // }

    static fetchAll() {
        let sql = "SELECT * FROM Campuses;";
        return db.execute(sql);
    }
}

export default Campus;