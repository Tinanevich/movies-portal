const prepareRating = (value: number | undefined) => value ? value + "/10" : 'unknown';

export default prepareRating;