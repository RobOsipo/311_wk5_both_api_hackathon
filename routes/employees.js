const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employees')

router.get('/', employeeController.getEmployee)

router.get('/:id', employeeController.getEmployeeById)

router.get('/firstname/:first_name', employeeController.getEmployeeByFirstName)

router.get('/salary', employeeController.getEmployeeAndSalaries)

router.get('/salary/:id', employeeController.getEmployeeSalaryById)

router.get('/department/:id', employeeController.getEmployeeDepartmentById)




module.exports = router;