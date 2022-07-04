import { sequelize } from "../instances/mysql";
import {Model, DataTypes} from 'sequelize';

interface userInstance extends Model {
    id: number;
    name: string;
    age: number;
}
// criando o type pro usuario 

export const User = sequelize.define<userInstance>('User',{
id: {

    primaryKey: true,
    type: DataTypes.INTEGER,

}, name: {
    type: DataTypes.STRING,

},  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18,
    }

},{
    tableName: 'users',
    timestamps: false,

})

// criei um model ensinando ao sequelize quais os tipos de dados que tenho, e como essa tabela se comporta...

//timestamps = cria automaticamente dois campos com a data e o horario que os dados foram inseridos  createdAT updateAT
// table name = nome da tabela que está lá no sql 
//user = nome do model 