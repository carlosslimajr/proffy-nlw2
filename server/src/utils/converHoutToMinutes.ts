export default function convertHourToMinutes(time:string){

  //8:00

  const [hour,minutes] = time.split(':').map(Number) //quebrar e transformar em minutos
  const timeInMinutes = (hour*60) + minutes;
  return timeInMinutes;
}