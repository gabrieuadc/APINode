const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/loginModel')

exports.postUser =  async (req,res) => {
    const { name, email, password, confirmpassword } = req.body

    if(!name){
        return res.status(422).json({msg: 'o nome é obrigatório'})
    }

    if(!email){
        return res.status(422).json({msg: 'o email é obrigatório'})
    }

    if(!password){
        return res.status(422).json({msg: 'a senha é obrigatório'})
    }

    if(password!== confirmpassword){
        return res.status(422).json({msg: 'as senhas não conferem'})
    }

    const userExists = await User.findOne({email:email})

    if (userExists){
        return res.status(422).json({msg:'utilize outro email'})
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password,salt)

    const user = new User({
        name,
        email,
        password:passwordHash,
    });

    try{
        await user.save()
        res.status(201).json({msg: ' usuario criado com sucesso'})
    
    } catch(error){
        res.status(500).json({msg: 'aconteceu um erro com o servidor'})
        }
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }
  
    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
  
    const user = await User.findOne({ email: email });
  
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
  
    const checkPassword = await bcrypt.compare(password, user.password);
  
    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha inválida" });
    }
  
    try {
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      )
        res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
  };

exports.getPrivate = ("/user/:id", checkToken, async (req, res) => {
    const id = req.params.id;
  
    // check if user exists
    const user = await User.findById(id, "-password");
  
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
  
    res.status(200).json({ user });
  });

function checkToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  
    try {
      const secret = process.env.SECRET;
  
      jwt.verify(token, secret);
  
      next();
    } catch (err) {
      res.status(400).json({ msg: "O Token é inválido!" });
    }
  }


// npm install bcrypt dotenv express jsonwebtoken mongoose
// npm install --save-dev nodemon

// npm install bcrypt jsonwebtoken