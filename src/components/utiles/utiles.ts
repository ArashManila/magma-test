const makeid = (length:number) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

const convertMonth = (month: number) => {
  const converted_m = month + 1;
  if (converted_m < 10) return `0${converted_m}`;
  else return converted_m.toString();
};

const convertDate = (date: string) => {
  const newDate = new Date(date);
  const combinedDate = `${newDate.getDate()}.${convertMonth(
    newDate.getMonth()
  )}.${newDate.getFullYear()}`;
  return combinedDate;
};

export default { makeid, convertDate};