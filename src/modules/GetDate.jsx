function GetDate(props) {
  if (!props.timeCreated) {
    console.log("no props");
    return "no time";
  }
  const findDate = props.timeCreated;
 
  const timestamp = new Date(findDate * 1000);

  let theDate = new Intl.DateTimeFormat("da-DK", { year: "numeric", month: "2-digit", day: "numeric" }).format(timestamp);

  return theDate;
}

export default GetDate;
