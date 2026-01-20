import { DataTypes } from 'sequelize';
            import { sequelize } from '../config/db.js';
            import { Image } from './image.model.js';

            export const Chateau = sequelize.define(
                'Chateau',
                {
                    Chateau_Id: {
                        type: DataTypes.INTEGER,
                        autoIncrement: true,
                        primaryKey: true
                    },
                    Chateau_Name: {
                        type: DataTypes.STRING(80),
                        allowNull: false
                    },
                    Chateau_Price: {
                        type: DataTypes.INTEGER,
                        allowNull: true
                    },
                    Chateau_Adresse: {
                        type: DataTypes.STRING(80),
                        allowNull: true
                    },
                    Chateau_Size: {
                        type: DataTypes.STRING(80),
                        allowNull: true
                    },
                    Chateau_Rate: {
                        type: DataTypes.STRING(80),
                        allowNull: true
                    },
                    Image_Id: {
                        type: DataTypes.INTEGER,
                        allowNull: true
                    },
                    User_Id: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                },
                {
                    tableName: 'chateaux',
                    timestamps: false,
                }
            );

            Chateau.belongsTo(Image, { foreignKey: 'Image_Id', as: 'image' });