interface IProps {
  year: string;
  month: string | any;
  date: string;
  day: string;
}

const useDateForm = (dateForm: string): IProps => {
  const splitDate = dateForm.split("-");

  let month;
  let day = splitDate[3].toUpperCase();

  switch (splitDate[1]) {
    case "01": {
      month = "JAN";
      break;
    }
    case "02": {
      month = "FEB";
      break;
    }
    case "03": {
      month = "MAR";
      break;
    }
    case "04": {
      month = "APR";
      break;
    }
    case "05": {
      month = "MAY";
      break;
    }
    case "06": {
      month = "JUN";
      break;
    }
    case "07": {
      month = "JUL";
      break;
    }
    case "08": {
      month = "AUG";
      break;
    }
    case "09": {
      month = "SEP";
      break;
    }
    case "10": {
      month = "OCT";
      break;
    }
    case "11": {
      month = "NOV";
      break;
    }
    case "12": {
      month = "DEC";
      break;
    }
  }

  return { year: splitDate[0], month, date: splitDate[2], day };
};

export default useDateForm;
