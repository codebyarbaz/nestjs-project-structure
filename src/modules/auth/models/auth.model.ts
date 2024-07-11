import { Column, Model, Table, DataType } from 'sequelize-typescript';

import { TABLE_NAMES } from '../../../constants';

@Table({
    tableName: TABLE_NAMES.AUTH,
    timestamps: true,
})
export class Auth extends Model<Auth> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        comment: 'Name Column'
    })
    name: string;

    @Column({
        type: DataType.STRING
    })
    email: string;

    @Column({
        type: DataType.STRING
    })
    password: string;
}