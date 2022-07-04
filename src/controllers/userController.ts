import { Request, Response } from 'express';
import { User } from './../models/user';



export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const deletar = async (req: Request, res: Response) => {
    let id = req.params.id; // armazenei o id para usar no select 
   
    await User.destroy({where: {id: id} });
    res.redirect("/");
};


export const CreateNewUser = async (req:Request, res: Response) => {
    let newUserName: string = req.body.name;
    let newUserAge: number = parseInt(req.body.age);

    if(newUserName) {
        let firstLetterUpperCase = newUserName[0].toUpperCase();        
        const newUser = User.build({
            name: firstLetterUpperCase + newUserName.slice(1),
            age: newUserAge
        });
        await newUser.save();                
    }
    res.redirect('/');
}







export const att = async (req:Request, res: Response) => {
    let newUserName: string = req.body.name;
    let newUserAge: number = parseInt(req.body.age);

    if(newUserName) {
        let firstLetterUpperCase = newUserName[0].toUpperCase();        
        const newUser = User.build({
            name: firstLetterUpperCase + newUserName.slice(1),
            age: newUserAge
        });
        await newUser.save();                
    }
    res.redirect('/');
}

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};


export const addIdade = async (req: Request, res: Response) => {
    let id: string = req.params.id
    let usuario = await User.findAll({where: {id}});
    if(usuario.length > 0) {
       let user = usuario[0];
       user.age++;
       user.save();
    }
 res.redirect('/')
}

export const diminuirIdade = async (req: Request, res: Response) => {
    let id: string = req.params.id
    let usuario = await User.findAll({where: { id}});
    if(usuario.length > 0) {
       let user = usuario[0];
       user.age--;
       user.save();
    }
 res.redirect('/')
   }




   export const excluir = async (req: Request, res: Response) => {
    let id: string = req.params.id
    await User.destroy({
        where: {id}
    });
    res.redirect('/')
   }


   export const editar = async (req: Request, res: Response) => {
      let id: string = await req.params.id as string
     const user = await User.findAll({where: {id: id}})
     console.log(user)
      res.render('pages/editar', {
        User: user,
        id       
    });

   }

   
   export const atualizarNome = async (req: Request, res: Response) => {
    let id: string = await req.params.id as string
    console.log(id)
   const user = await User.findAll({
    
   })
   console.log(user)
   
    res.redirect('/') 

  }
 



