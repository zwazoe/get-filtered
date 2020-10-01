exports.getFiltered = function (data, config = {}, callback) {
  // filter key maybe status or reason or rows. default to status
  let filter_key = config.filter_key || "status";

  // inc maybe error, failure, success (if sstatus) or 1 to ... if row, etc.
  let inc = config.inc || [];
  // filter based data accordingly
  let output = data.filter((item) => {
    // if filter key availabble
    //   get the value and lowercase
    let product = item[filter_key] && item[filter_key].toLowerCase();
    // return only if product is included in acc. to config.inc
    return inc.includes(product);
  });
  // callback func. allows to mutate output prior to return.
  if (callback) {
    return callback(output);
  }
  return output;
};
