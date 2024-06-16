import { Schema, model } from "mongoose";
import { ICustomer } from "../types/models";
import bcrypt from "bcrypt";
const customerSchema = new Schema<ICustomer>(
  {
    firstName: {
      type: String,
      required: false,
      trim: true,
      min: [6, "Too few eggs"],
      max: [12, "Only allow Max 12 characters"],
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
      min: [6, "Too few eggs"],
      max: [12, "Only allow Max 12 characters"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v: string) {
          return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            v
          );
        },
        message: (props: any) => `${props.value} is not a valid email!`,
      },
    },
    phone: {
      type: String,
      required: false,
      trim: true,
      unique: true,
      lowercase: true,
      minLength: 10,
      validate: {
        validator: function (value: string) {
          const phoneRegex = /(0[3|5|7|8|9])([0-9]{8})/i;
          return phoneRegex.test(value);
        },
        message: `{VALUE} is not a valid phone!`,
        // message: (props) => `{props.value} is not a valid email!`,
      },
    },
    //địa chỉ
    address: {
      type: String,
      required: false,
      trim: true,
      maxLength: 255,
    },
    //xả phường
    yard: {
      type: String,
      required: false,
      trim: true,
      maxLength: 50,
    },
    //quận huyện
    district: {
      type: String,
      required: false,
      trim: true,
      maxLength: 50,
    },
    //tỉnh thành phố
    province: {
      type: String,
      required: false,
      trim: true,
      maxLength: 50,
    },
    /**
     * Cho phép mua hàng không đăng nhập
     * Do vậy ko yêu cầu pass
     * Nếu có pass thì validate
     */
    password: {
      type: String,
      required: false,
      trim: true,
      minLength: 8,
      validate: {
        validator: function (v: string) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!*%$#]).{8,}$/.test(
            v
          );
        },
        message: (props) => `${props.value} is not a valid password!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Customer = model<ICustomer>("Customer", customerSchema);
export default Customer;