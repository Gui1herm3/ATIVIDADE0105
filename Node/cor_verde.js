    const mysql = require('mysql2');

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'phpmyadmin',
      password: 'aluno',
      database: 'ATIVIDADE3004'
    });

    connection.connect();

    const queryString = "SELECT * FROM CARROS WHERE COR = 'VERDE'";

    connection.query(queryString, (error, results, fields) => {
      if (error) throw error;
      console.log('Resultado da consulta:');
      console.log(results);
    });

    connection.end
