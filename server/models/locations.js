import db from "../config/db.js";

class Location {
    constructor(campusId, locationName, address, mapUrl, activeStatus) {
        this.campusId = campusId;
        this.locationName = locationName;
        this.address = address;
        this.mapUrl = mapUrl;
        this.activeStatus = activeStatus;
    }

    save() {
        let sql = `
            CALL locationAdd(
                '${this.campusId}',
                '${this.locationName}',
                '${this.address}',
                '${this.mapUrl}',
                '${this.activeStatus}'
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ id}) {
        let sql = `
            CALL locationSearch(
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
        let sql = "SELECT * FROM Locations;";
        return db.execute(sql);
    }
}

export default Location;