
import { Column, Model, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    image: string;
}   