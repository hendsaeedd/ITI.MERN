// use FacultySystemDB;

// db.createCollection("student");

db.student.insert({
    FirstName: "Hend",
    LastName: "Saeed",
    Age: 21,
    Faculty: { Name: "Computer Science", Address: "Mansoura" },
    Grades: [
        { CourseName: "DSA", Grade: 90, Pass: true }
    ],
    IsFired: false
});

db.student.insert({
    FirstName: "Ahmed",
    LastName: "Ali",
    Age: 21,
    Faculty: { Name: "Computer Science", Address: "Mansoura" },
    Grades: [
        { CourseName: "DSA", Grade: 30, Pass: false }
    ],
    IsFired: true
});

db.student.insert({
    FirstName: "Mohamed",
    LastName: "Ali",
    Age: 21,
    Faculty: { Name: "Computer Science", Address: "Mansoura" },
    Grades: [
        { CourseName: "DSA", Grade: 90, Pass: true }
    ],
    IsFired: false
});



// db.student.find();

// db.student.find({ FirstName: "Hend" });

// db.student.find({ IsFired: true });

// db.student.find({ FirstName: "Ahmed", LastName: "Ali" });

// db.student.updateOne({ FirstName: "Hend" }, { $set: { LastName: "Mohamed" } });

// db.student.deleteOne({ IsFired: true });

// db.student.delete();

// db.dropDatabase();


