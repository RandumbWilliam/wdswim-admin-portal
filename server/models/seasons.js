import db from "../config/db.js";

class Seasons {
    constructor(campusId, seasonName, activeStatus, startDate, endDate, registrationStartDate, note, registrationStatus) {
        this.campusId = campusId;
        this.seasonName = seasonName;
        this.activeStatus = activeStatus;
        this.startDate = startDate;
        this.endDate = endDate;
        this.registrationStartDate = registrationStartDate;
        this.note = note;
        this.registrationStatus = registrationStatus;
    }

    save() {
        let sql = `
            CALL seasonAdd(
                '${this.campusId}',
                '${this.seasonName}',
                '${this.activeStatus}',
                '${this.startDate}',
                '${this.endDate}',
                '${this.registrationStartDate}',
                '${this.note}',
                '${this.registrationStatus}'
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ id}) {
        let sql = `
            CALL seasonSearch(
                '${id}'
            );`
        return db.execute(sql);
    }


    static fetchAll() {
        let sql = "SELECT * FROM Seasons;";
        return db.execute(sql);
    }
}

export default Seasons;