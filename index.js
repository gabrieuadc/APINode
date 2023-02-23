const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const ServiceRoutes= require('./routes/serviceRoutes')
const DespesaRoutes= require('./routes/despesaRoutes')
const LoginRoutes= require('./routes/loginRoutes')
const EmpregadoRoutes= require('./routes/empregadoRoutes')
const CustoRoutes= require('./routes/custoRoutes')
const EstoqueRoutes= require('./routes/estoqueRoutes')
const cors = require('cors');

app.use(
    express.urlencoded({
        extended:true
    }),
)

app.use(express.json())
app.use(cors());

app.use('/service', ServiceRoutes)
app.use('/despesa', DespesaRoutes)
app.use('/login', LoginRoutes)
app.use('/empregado', EmpregadoRoutes)
app.use('/custo', CustoRoutes)
app.use('/estoque', EstoqueRoutes)

const dbUser = process.env.DB_USER
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@gabrelcluster.tchn2xk.mongodb.net/?retryWrites=true&w=majority`)
    .then(() =>{
	console.log("Conectou ao banco")
    app.listen(4000)
})
.catch((err) => console.log(err))

// npm init
// npm install express nodemon mongoose dotenv

// app.use((req, res, next) =>{
//     res.header('Acess-Control-Allow-Origin', '*');
// 	res.header(
// 	'Acess-Control-Allow-Header',
// 	'Origin X-Requested-With, Content-Type, Aceept, Authorization'
// 	);

//     if (req.method === 'OPTIONS'){
//         res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//     }
//     next();
// })

// function checkToken(req, res, next) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
  
//     if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  
//     try {
//       const secret = process.env.SECRET;
  
//       jwt.verify(token, secret);
  
//       next();
//     } catch (err) {
//       res.status(400).json({ msg: "O Token é inválido!" });
//     }
//   }

// npm install bcrypt jsonwebtoken