# API Cinema

API REST em Node.js (Express + mysql) para o recurso `filme` (id, titulo, genero, classificacao).

## Como rodar

1. Rode o script `sql/schema.sql` no MariaDB/MySQL.
2. Ajuste a conexão em `src/config/db.js` (ou use variáveis `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`). Padrão: root, sem senha, banco `cinema`.
3. `npm install`
4. `npm start` (http://localhost:3000)

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | /filme | Lista todos |
| GET | /filme/:id | Busca por id |
| POST | /filme | Cria |
| PUT | /filme/:id | Atualiza |
| DELETE | /filme/:id | Remove |

Body (POST/PUT):

```json
{ "titulo": "Matrix", "genero": "Ficção Científica", "classificacao": "14 anos" }
```
