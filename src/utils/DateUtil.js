const { DateTime } = require('luxon');

module.exports.truncByHour = date => {
  const dateHour = DateTime.fromJSDate(date).toFormat('yyyy-LL-dd_HH:00')
  if (dateHour === "Invalid DateTime") return undefined
  return dateHour;
};

module.exports.formatToDate = format => {
  format = format || '';
  const date = DateTime.fromFormat(format, 'yyyy-LL-dd_HH:00').toJSDate();
  if (date.toString() === 'Invalid Date') return undefined;
  return date;
};
