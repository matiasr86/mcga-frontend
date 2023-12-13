const dateValid = (value:Date) => {
  const currentDate = new Date();
  return value <= currentDate;
}
 
export {dateValid};