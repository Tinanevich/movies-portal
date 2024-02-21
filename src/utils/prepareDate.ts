const prepareDate = (value: string | undefined) => value ? value.slice(0, 4) : ' ';

export default prepareDate;