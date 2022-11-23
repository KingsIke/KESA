import { DataTypes, Model } from "sequelize";
import {db} from '../config'

export interface VendorUserAttributes {
  id: string;
  email: string;
  pincode: string;
  ownerName: string;
  shopName: string;
  password: string;
  serviceAvailable: boolean;
  rating: number;
  firstName?: string;
  lastName?: string;
  salt: string;
  address: string;
  phone: string;
  otp: number;
  otp_expiry: Date;
  lng: number;
  lat: number;
  verified?: boolean;
}

class VendorInstance extends Model<VendorUserAttributes> {}

VendorInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Email address is required",
          },
          isEmail: {
            msg: "please provide a valid email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "password is required",
          },
          notEmpty: {
            msg: "provide a password",
          },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      salt: {
          type:DataTypes.STRING,
          allowNull:false,
      },
      address:{
          type:DataTypes.STRING,
          allowNull:true
      },
      phone:{
          type:DataTypes.STRING,
          allowNull:false,
          validate: {
            notNull: {
              msg: "Phone number is required",
            },
            notEmpty: {
              msg: "provide a phone number",
            },
          }
      },
      otp:{
          type:DataTypes.NUMBER,
          allowNull:false,
          validate: {
            notNull: {
              msg: "Otp is required",
            },
            notEmpty: {
              msg: "provide an Otp",
            },
          }
      },
      otp_expiry:{
          type:DataTypes.DATE,
          allowNull:false,
          validate: {
            notNull: {
              msg: "Otp expired",
            }
          }
      },
      lng:{
          type:DataTypes.NUMBER,
          allowNull:true
      },
      lat:{
        type:DataTypes.NUMBER,
        allowNull:true
    },
    verified:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        validate: {
            notNull: {
              msg: "User must must be verified",
            },
            notEmpty: {
                msg: "user not verified",
              },
          }
    },
    pincode: {
        type: DataTypes.STRING,
    },
    ownerName: {
        type: DataTypes.STRING,
    },
    shopName: {
        type: DataTypes.STRING,
    },
    serviceAvailable: {
        type: DataTypes.BOOLEAN,
    },
    
    rating: {
        type: DataTypes.NUMBER,
    }
},

{
    sequelize:db,
    tableName:'vendor',
});
