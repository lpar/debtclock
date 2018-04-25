var USDebt = function () {
  var destElem = "debt",
    baseDebt =  21043317739890.61,
    baseDebtDate =  new Date(2018,3,23), // months are numbered from 0
    perSecond = 37589.52331799,
    updateInterval = 100,

    update = function () {
      var tdiffsec = (new Date() - baseDebtDate) / 1000,
        debt = Math.round(baseDebt + tdiffsec * perSecond),
        nicedebt = "$" + debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      destElem.innerText = nicedebt;
      window.setTimeout(update, updateInterval);
    },

    // First argument is the ID of the HTML element you want updated
    // Second argument is the time between updates, in thousandths of a second
    // Third argument is the base debt in $
    // Fourth argument is the date on which that was the base debt
    // (months for Date are numbered 0 = Jan, 1 = Feb etc.)
    // Fifth argument is the debt increase per second since then
    setup =  function (id, interval, basedebt, basedebtdate, persecond) {
      destElem = document.getElementById(id);
      baseDebt = basedebt;
      baseDebtDate = basedebtdate;
      perSecond = persecond;
      updateInterval = interval;
      window.setTimeout(update,interval);
    };

  return {"setup": setup};

}();
