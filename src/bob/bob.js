function Bob() {
 this.bobs_age = 25; //Bobs current age
 this.get_age = () => {
  return this.bobs_age; //get Bobs current age
 }
}
module.exports = new Bob();