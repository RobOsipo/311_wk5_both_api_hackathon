const mysql = require('mysql')
const connection = require('../connection')


const getEmployee = (req,res) => {
 const sql = 'SELECT * FROM employees LIMIT 50'
 connection.query(sql, (err, rows) => {
     if (err) {
         console.log(err)
         res.status(404).send('A problem occured' + err.sqlMessage)
     } return res.json(rows)
 })
}


const getEmployeeById = (req,res) => {
 let sql = "SELECT * FROM employees WHERE emp_no = ?"
 sql = mysql.format(sql, [req.params.id])
 connection.query(sql, (err, rows) => {
   if (err) return handleSQLError(res, err)
   return res.json(rows);
 })
}


const getEmployeeByFirstName = (req,res) => {
 let sql = "SELECT * FROM employees WHERE first_name = ?"
 sql = mysql.format(sql, [req.params.first_name])
 connection.query(sql, (err, rows) => {
   if (err) return handleSQLError(res, err)
   return res.json(rows);
 })
}

const getEmployeeAndSalaries = (req,res) => {
 let sql = "SELECT * FROM employees INNER JOIN salaries ON employees.emp_no = salaries.emp_no"
 connection.query(sql, (err, rows) => {
  if (err) return handleSQLError(res, err)
  return res.json(rows);
 })
}

const getEmployeeSalaryById = (req,res) => {
  let sql = "SELECT * FROM employees INNER JOIN salaries ON employees.emp_no = salaries.emp_no WHERE employees.emp_no = ?"
  sql = mysql.format(sql, [req.params.id])
  connection.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
 }

 const getEmployeeDepartmentById = (req,res) => {
  let sql = "SELECT * FROM employees INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no WHERE employees.emp_no = ?"
  sql = mysql.format(sql, [req.params.id])
  connection.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
 }




module.exports = {
    getEmployee,
    getEmployeeById,
    getEmployeeByFirstName,
    getEmployeeAndSalaries,
    getEmployeeSalaryById,
    getEmployeeDepartmentById
}