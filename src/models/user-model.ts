import * as Mongoose from 'mongoose';
import * as Uid from 'uuid/v4';

let userSchema = new Mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  classification: { type: Number, required: false },
  visitedTimes: [{ startedOn: Date, equipment: String }],
  signature: { type: [{ prevNode: { x: Number, y: Number }, currentNode: { x: Number, y: Number } }], required: true },
  createdOn: Date
});

userSchema.pre('save', function(next : any) {
  if (!this.createdOn) {
    this.createdOn = new Date();
  }
  next();
});

userSchema.methods.toJson = function() {
  return  this.toObject();
}

userSchema.methods.updateClassification = function(id: any) {
  return  this.toObject();
}
export default Mongoose.model("wesley-users", userSchema);