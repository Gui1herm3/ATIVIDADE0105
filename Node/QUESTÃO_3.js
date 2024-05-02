  const mysql = require('mysql2');

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'phpmyadmin',
      password: 'aluno',
      database: 'ATIVIDADE3004'
    });

    connection.connect();

    const queryString = '  SELECT L.*, C.NOME_CLIENTE, C.TELEFONE, CAR.NOME_CARRO     FROM LOCAÇÕES L     INNER JOIN CLIENTES C ON L.CODCLIENTE = C.CÓDIGO      INNER JOIN CARROS CAR ON L.CODCARRO = CAR.CÓDIGO      WHERE CAR.COMBUSTÍVEL IN ('GASOLINA', 'ÁLCOOL')';

    connection.query(queryString, (error, results, fields) => {
      if (error) throw error;
      console.log('Resultado da consulta:');
      console.log(results);
    });

    connection.end();
