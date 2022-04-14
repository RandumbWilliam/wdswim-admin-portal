import db from "../config/db.js";

class AccountHolder {
    constructor(contactName, email, phoneNumber, emergencyContact, emergencyPhone, address1, address2, city, province, postalCode, dateCreated, notes) {
        this.contactName = contactName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.emergencyPhone = emergencyPhone;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.province = province;
        this.postalCode = postalCode;
        this.dateCreated = dateCreated;
        this.notes = notes;
    }

    save() {
        let sql = `
            CALL accountHoldersAdd(
                '${this.contactName}',
                '${this.email}',
                '${this.phoneNumber}',
                '${this.emergencyContact}',
                '${this.emergencyPhone}',
                '${this.address1}',
                '${this.address2}',
                '${this.city}',
                '${this.province}',
                '${this.postalCode}',
                '${this.notes}'
            );
        `;
        
        return db.execute(sql);
    }

    static findOne({ id}) {
        let sql = `
            CALL accountHoldersSearch(
                '${id}', "", "", ""
            );`
        return db.execute(sql);
    }

    static fetchSome(contactName, email, phoneNumber) {
        let sql = `
            CALL accountHoldersSearch(
                NULL,
                '${contactName}',
                '${email}',
                '${phoneNumber}'
            );`
        return db.execute(sql);
    }

    static fetchAll() {
        let sql = "SELECT * FROM AccountHolders;";
        return db.execute(sql);
    }
}

export default AccountHolder;