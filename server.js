const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./connection.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//view all departments
app.get('/api/department', (req,res) => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({
            message: 'query successful',
            data: rows
        });
    });
});

//view al roles 
app.get('/api/role', (req,res) => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({
            message: 'query successful',
            data: rows
        });
    });
});

//view all employees
app.get('/api/department', (req,res) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({
            message: 'query successful',
            data: rows
        });
    });
});

//add department
app.post('/api/new-department', ({ body }, res) => {
    const sql = `INSERT INTO department (department_name)
      VALUES (?)`;
    const params = [body.department_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

//add a role
app.post('/api/new-role', ({ body }, res) => {
    const sql = `INSERT INTO role (title, salary, department_id)
      VALUES (?)`;
    const params = [body.title, body.salary, body.department_id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

//add an employee
app.post('/api/new-employee', ({ body }, res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

//update employee role 
app.put('/api/employee/:id', (req,res) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [req.body.employee, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
          res.json({
            message: 'employee not found'
          });
        } else {
          res.json({
            message: 'success',
            data: req.body,
            changes: result.affectedRows
          });
        }
      });
});

app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });