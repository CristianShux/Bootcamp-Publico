import { mongoose } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Porfavor proporciona tu nombre"],
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
    },
    lastName: {
      type: String,
      required: [true, "Porfavor proporciona tu apellido"],
      minlength: [3, "El apellido debe tener al menos 3 caracteress"],
    },
    email: {
      type: String,
      required: [true, "Porfavor ingresa un correo valido"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es necesaria"],
      minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
    },
  },
  { timestamps: true }
);

// metodo virtual
userSchema
  .virtual("passwordConfirmation")
  .get(function () {
    return this._passwordConfirmation;
  })
  .set(function (value) {
    this._passwordConfirmation = value;
  });

userSchema.pre("validate", function (next) {
  if (this.password !== this.passwordConfirmation) {
    this.invalidate(
      "passwordConfirmation",
      "La contraseña y su confirmacion no coinciden"
    );
  }
  next();
});

//metodo de hash para proteger pass

userSchema.pre('save',function(next){
    bcrypt.hash(this.password,10).then((encryptedPass)=> {
        this.password = encryptedPass;
        next();
    })
})

const User = mongoose.model("users", userSchema);

export { User, userSchema };
