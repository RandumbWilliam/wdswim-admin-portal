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

    static fetchAll() {
        let sql = "SELECT * FROM Classes;";
        return db.execute(sql);
    }
}

export default Classes;
