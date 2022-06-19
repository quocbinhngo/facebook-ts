import mongoose, { Document, Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

export interface UserInput {
  firstName: string;
  lastName: string;
  username?: string;
  email: string;
  password: string;
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
}

export interface UserDocument extends UserInput, Document {
  createdAt: Date;
  updatedAt: Date;
  avatar: String;
  cover: String;
  verified: Boolean;
  friends: Array<UserDocument["_id"]>;
  followingUsers: Array<UserDocument["_id"]>;
  followers: Array<UserDocument["_id"]>;
  requests: Array<UserDocument["_id"]>;
  search: Array<UserDocument["_id"]>;
  savedPosts: Array<any>;
}

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      text: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      text: true,
    },
    username: {
      type: String,
      default: undefined,
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      text: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
    cover: {
      type: String,
      trim: true,
      default: undefined,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      enum: ["male", "female", "other"],
    },
    birthYear: {
      type: Number,
      required: true,
      trim: true,
    },
    birthMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    birthDay: {
      type: Number,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    followingUsers: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: { type: Array, default: [] },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ["Single", "In a relationship", "Married", "Divorced"],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  { timestamps: true }
);

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
