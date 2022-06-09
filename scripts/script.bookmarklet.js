javascript: (function () {
  /* Replace the original URL and go to the new URL */
  function convertUrl(url) {
    const newUrlFirstPart = "https://a1.mzstatic.com/us/r1000/0/";
    /* Get everything after the first occurring "/image/thumb/" in the original URL */
    const oldUrlLastPart = url.split("/image/thumb/")[1];
    /* Get everything before the last occuring "/" in the oldUrlLastPart */
    const newUrlLastPart = oldUrlLastPart
      ? oldUrlLastPart.slice(0, oldUrlLastPart.lastIndexOf("/"))
      : null;
    /* concatenate both parts with template literals */
    const newUrl = newUrlLastPart ? `${newUrlFirstPart}${newUrlLastPart}` : url;
    return newUrl;
  }
  const newUrl = convertUrl(location.href);
  /* Open in the current tab */
  window.open(newUrl, "_self");
})();
