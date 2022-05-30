javascript: (function () {
  /* Use regex to replace the original URL */
  function convertUrl(url) {
    const firstPart = "https://a1.mzstatic.com/us/r1000/0";
    const regex = /\/(Music|Features|Video).*\.(jpg|png|gif)/;
    const urlMatch = url.match(regex);
    const newUrl = urlMatch ? `${firstPart}${urlMatch[0]}` : url;
    return newUrl;
  }
  const newUrl = convertUrl(location.href);
  /* Go to the new URL in the current tab */
  window.open(newUrl, "_self");
})();
