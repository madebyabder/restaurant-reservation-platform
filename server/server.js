const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_resto"
});

db.connect((err) => {
    if (err) {
        console.log("Erreur de connexion à la base de données : ", err);
        return;
    }
    console.log("Server rah khedam .");
});

app.post('/add_reservation', (req, res) => {
    const { name, phone, date, guests, cardHolder, cardNumber, expiryDate, cvv } = req.body;

    db.beginTransaction((err) => {
        if (err) {
            console.error("Transaction error: ", err);
            return res.status(500).json({ message: "Transaction error" });
        }

        const reservationQuery = `INSERT INTO reservations (name, date, guests, card_holder, card_number, expiry_date, cvv) 
                                  VALUES (?, ?, ?, ?, ?, ?, ?)`;

        db.query(reservationQuery, [name, date, guests, cardHolder, cardNumber, expiryDate, cvv], (err, result) => {
            if (err) {
                console.error("Error inserting reservation: ", err);
                return db.rollback(() => res.status(500).json({ message: "Error inserting reservation" }));
            }

            const reservationId = result.insertId;

            const clientQuery = `INSERT INTO clients (name, phone, id_reservation) VALUES (?, ?, ?)`;

            db.query(clientQuery, [name, phone, reservationId], (err) => {
                if (err) {
                    console.error("Error inserting client: ", err);
                    return db.rollback(() => res.status(500).json({ message: "Error inserting client" }));
                }

                db.commit((err) => {
                    if (err) {
                        console.error("Commit error: ", err);
                        return db.rollback(() => res.status(500).json({ message: "Commit error" }));
                    }

                    res.status(200).json({ message: "Reservation and client added successfully" });
                });
            });
        });
    });
});


app.listen(port, () => {
    console.log("Server is running on port " + port);
});