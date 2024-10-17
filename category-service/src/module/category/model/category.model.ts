import { Column, Model, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
@Table
export class Category extends Model<Category> {
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number
}   