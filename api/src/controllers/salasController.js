const connect = require("../db/connect");

module.exports = class salasController {
    static async createSala(req, res){
        const { nome, capacidade, localizacao, disponibilidade, equipamentos } = req.body;

        if(!nome || !capacidade || !localizacao || !disponibilidade || !equipamentos) {
            return res
        .status(400)
        .json({ error: "Todos os campos devem ser preenchidos" });
        }

        const query = `insert into salas (nome, capacidade, localizacao, disponibilidade, equipamentos) values (?,?,?,?,?)`;
        const values = [nome, capacidade, localizacao, disponibilidade, equipamentos];
      try {
        connect.query(query, values, (err) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao criar sala!" });
          }
          return res.status(201).json({ message: "Sala criada com sucesso!" });
        });
      } catch (error) {
        console.log("Erro ao executar consulta:", error);
        res.status(500).json({ error: "Erro interno do servidor!" });
      }
    }
    static async getAllSalas(req, res) {
        const query = `select * from salas`;
    
        try {
          connect.query(query, (err, results) => {
            if (err) {
              console.log(err);
              return res.status(500).json({ error: "Erro ao buscar salas" });
            }
            return res
              .status(200)
              .json({ message: "Salas listados com sucesso!", salas: results });
          });
        } catch (error) {
          console.log("Erro ao executar a query: ", error);
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
      } 

}