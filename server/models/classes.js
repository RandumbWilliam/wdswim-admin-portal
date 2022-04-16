import db from "../config/db.js";

class Classes {
    constructor(seasonId, numStudents, startDate, endDate, instructorId, lessonTypeId, swimLevelId, locationId, startTime, endTime, occurence, reccurence) {
        this.seasonId = seasonId;
        this.numStudents = numStudents;
        this.startDate = startDate;
        this.endDate = endDate;
        this.instructorId = instructorId;
        this.lessonTypeId = lessonTypeId;
        this.swimLevelId = swimLevelId;
        this.locationId = locationId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.occurence = occurence;
        this.reccurence = reccurence;
        
    }

    save() {
        let sql = `
            CALL seasonAdd(
                '${this.seasonId}',
                '${this.numStudents}',
                '${this.startDate}',
                '${this.endDate}',
                '${this.instructorId}',
                '${this.lessonTypeId}',
                '${this.swimLevelId}',
                '${this.locationId}',
                '${this.startTime}',
                '${this.endTime}'
            );
        `;
        
        return db.execute(sql);
    }

    static fetchAll() {
        let sql = "SELECT * FROM Classes;";
        return db.execute(sql);
    }
}

export default Classes;
