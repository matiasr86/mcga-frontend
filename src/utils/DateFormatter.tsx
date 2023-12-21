const dateValid = (value: Date) => {
  const inputDate = new Date(value);
  const currentDate = new Date();

  // Obtiene el número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC para cada fecha
  const inputDateInMilliseconds = inputDate.getTime();
  const todayInMilliseconds = currentDate.getTime();

  // Compara las dos fechas
  return inputDateInMilliseconds < todayInMilliseconds;
};

export { dateValid };
