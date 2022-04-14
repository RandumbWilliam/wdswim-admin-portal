import db from "../config/db.js";

class Students {
    constructor(firstName, lastName, gender, dateOfBirth, registrationDate, activeStatus, allergies, allergiesActions, notes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.registrationDate = registrationDate;
        this.activeStatus = activeStatus;
        this.allergies = allergies;
        this.allergiesActions = allergiesActions;
        this.notes = notes;
    }

    save() {
        let sql = `
            CALL studentAdd(
                '${this.firstName}',
                '${this.lastName}',
                '${this.gender}',
                '${this.dateOfBirth}',
                '${this.registrationDate}',
                '${this.activeStatus}',
                '${this.allergies}',
                '${this.allergiesActions}',
                '${this.notes}'
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ id}) {
        let sql = `
            CALL studentSearch(
                '${id}', "", "", ""
            );`
        return db.execute(sql);
    }

    static fetchSome(firstName, lastName, activeStatus = 'A') {
        let sql = `
            CALL studentSearch(
                NULL,
                '${firstName}',
                '${lastName}',
                '${activeStatus}'
            );`
        return db.execute(sql);
    }

    static fetchAll() {
        let sql = "SELECT * FROM Students;";
        return db.execute(sql);
    }
}

export default Students;