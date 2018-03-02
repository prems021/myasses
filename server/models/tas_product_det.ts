import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_product_det = sequelize.define('tas_product_det', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    CODE: {
      type: Sequelize.STRING,
      allowNull: false
    },
      BATCH: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
      HSN: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
      DATEOFPUR: {
      type: Sequelize.DATE,
      allowNull: false
    },
      DATEOFEXP: {
      type: Sequelize.DATE,
      allowNull: false
    },
    
   
  
  }, {
    tableName: 'tas_product_det',
     timestamps: true
  });


export {Tas_product_det};
