var express = require('express');
var router = express.Router();

const classroomController = require('../controllers').classroom;
const studentController = require('../controllers').student;
const lecturerController = require('../controllers').lecturer;
const courseController = require('../controllers').course;
const invoiceController = require('../controllers').invoice;
const userController = require('../controllers').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Classroom Router */
router.get('/api/classroom', classroomController.list);
router.get('/api/classroom/:id', classroomController.getById);
router.post('/api/classroom', classroomController.add);
router.put('/api/classroom/:id', classroomController.update);
router.delete('/api/classroom/:id', classroomController.delete);

/* Student Router */
router.get('/api/student', studentController.list);
router.get('/api/student/:id', studentController.getById);
router.post('/api/student', studentController.add);
router.put('/api/student/:id', studentController.update);
router.delete('/api/student/:id', studentController.delete);

/* Lecturer Router */
router.get('/api/lecturer', lecturerController.list);
router.get('/api/lecturer/:id', lecturerController.getById);
router.post('/api/lecturer', lecturerController.add);
router.put('/api/lecturer/:id', lecturerController.update);
router.delete('/api/lecturer/:id', lecturerController.delete);

/* Course Router */
router.get('/api/course', courseController.list);
router.get('/api/course/:id', courseController.getById);
router.post('/api/course', courseController.add);
router.put('/api/course/:id', courseController.update);
router.delete('/api/course/:id', courseController.delete);

/* Invoice Router */
router.get('/api/invoice/:id', invoiceController.getById);
router.post('/api/invoice', invoiceController.add);
router.put('/api/invoice/:id', invoiceController.update);
router.delete('/api/invoice/:id', invoiceController.delete);
router.get('/api/invoices/:id', invoiceController.list);

/* User Router */
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);

/* Advance Router */
router.post('/api/student/add_course', studentController.addCourse);
router.post('/api/classroom/add_with_students', classroomController.addWithStudents);
router.post('/api/lecturer/add_with_course', lecturerController.addWithCourse);

module.exports = router;
