const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	nombre:{
		type: String,
	    required: true
	},
	clave:{
		type: String,
		required: true
	},
	correo:{
		type: String,
		required: true,
	    unique: true
	}
});

//module.exports = mongoose.model('Usuario', UserSchema);     
const Usuario = mongoose.model('Usuario', userSchema); 