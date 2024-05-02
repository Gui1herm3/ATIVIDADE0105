const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'ATIVIDADE3004'
});
connection.query(`CREATE PROCEDURE SP_AdicionarCliente(IN nomeCliente VARCHAR(50), IN telefone VARCHAR(50), IN sexo VARCHAR(15), IN idade INT)
                  BEGIN
                    INSERT INTO CLIENTES (NOME_CLIENTE, TELEFONE, SEXO, IDADE) VALUES (nomeCliente, telefone, sexo, idade);
                  END`, (error) => {
  if (error) throw error;
  console.log('Stored Procedure SP_AdicionarCliente criada com sucesso!');
});












