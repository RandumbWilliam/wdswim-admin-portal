import db from "../config/db.js";

class LessonType {
    constructor(name, displayOrder) {
        this.name = name;
        this.displayOrder = displayOrder;
    }

    save() {
        let sql = `
            CALL lessonTypeAdd(
                '${this.name}',
                '${this.displayOrder}'
            );
        `;
        
        return db.execute(sql);
    }

    // static findOne({ email }) {
    //     let sql = `SELECT * FROM AdminAccounts WHERE email = "${email}" AND status = "A"`;
    //     return db.execute(sql);
    // }

    static fetchAll() {
        let sql = "SELECT * FROM LessonType;";
        return db.execute(sql);
    }
}

export default LessonType;