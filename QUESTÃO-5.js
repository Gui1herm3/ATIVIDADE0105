    const mysql = require('mysql2');

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'phpmyadmin',
      password: 'aluno',
      database: 'ATIVIDADE3004'
    });

    connection.connect();

    const queryString = `
CREATE PROCEDURE executeExercises()
BEGIN
   -- Exercício 2
  SELECT c.*, cl.NOME_CLIENTE, cl.TELEFONE
  FROM LOCAÇÕES l
  JOIN CARROS c ON l.CODCARRO = c.CÓDIGO
  JOIN CLIENTES cl ON l.CODCLIENTE = cl.CÓDIGO
  WHERE c.COMBUSTÍVEL IN ('GASOLINA', 'ETANOL');

  -- Exercício 3
  SELECT l.*, cl.NOME_CLIENTE, cl.TELEFONE
  FROM LOCAÇÕES l
  JOIN CLIENTES cl ON l.CODCLIENTE = cl.CÓDIGO
  JOIN CARROS c ON l.CODCARRO = c.CÓDIGO
  WHERE c.COMBUSTÍVEL IN ('GASOLINA', 'ETANOL');

  -- Exercício 4
  SELECT *
  FROM CARROS
  WHERE ESTÁ_DISPONIVEL = 'SIM'
    AND CÓDIGO NOT IN (
      SELECT CODCARRO
      FROM LOCAÇÕES
    );

  -- Exercício 6
  SELECT c.*, cl.NOME_CLIENTE, cl.TELEFONE
  FROM LOCAÇÕES l
  JOIN CARROS c ON l.CODCARRO = c.CÓDIGO
  JOIN CLIENTES cl ON l.CODCLIENTE = cl.CÓDIGO
  WHERE l.DATA_LOC = CURDATE();
END;
`;

    connection.query(queryString, (error, results, fields) => {
      if (error) throw error;
      console.log('Resultado da consulta:');
      console.log(results);
    });

    connection.end;
