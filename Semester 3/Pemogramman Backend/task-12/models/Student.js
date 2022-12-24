const db = require('../config/database');

class Student {
    static all = () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM students', (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    static create = (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO students SET ?', data, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    static update = (id, data) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE students SET ? WHERE id = ?', [data, id], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    static delete = (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM students WHERE id = ?', id, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    static find = (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM students WHERE id = ?', id, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

}

module.exports = Student;