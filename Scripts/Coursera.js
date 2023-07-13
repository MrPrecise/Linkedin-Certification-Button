// ==UserScript==
// @name         Coursera certification button
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Adds a button on your coursera accomplishments page for spesific certifications. This button when clicked takes information from the site and adds it to the Linkedin Certification
// @author       Eirik Thue
// @match        https://www.coursera.org/account/accomplishments/verify/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coursera.org
// @grant        none
// @downloadURL
// ==/UserScript==

(function () {
  /**
   * Select the date on the Coursera webpage and save it as "Month DD, Year" format as string
   */
  let date = document.querySelector(
    "#rendered-content > div > div > div:nth-child(2) > div > div > div._jyhj5r > div._pu0m129.left-col > div.rc-CompletionOverview > div > div.course-details > p:nth-child(2) > strong"
  ).innerHTML;

  /**
   * Selecting the coursename and save it as string
   */
  let courseName = document.querySelector(
    "#rendered-content > div > div > div:nth-child(2) > div > div > div._jyhj5r > div._pu0m129.left-col > div.rc-ProductOverviewSnippet.horizontal-box > div > div.vertical-box.info-content > div.course-name-container.flex-1 > h3 > a"
  ).innerHTML;

  /**
   *
   */
  let addCertificationUrl =
    "https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&";

  /**
   * Save name=coursename& as string for the final query
   */
  const name = "name=" + courseName + "&";

  /**
   * Save organizationId=2453129& as string (2453129 Is Courseras Orginization ID on LinkedIn)
   */
  const organizationId = 2453129 + "&";

  /**
   * Save issueYear= and year parsed in by date .getFullYear() will return only the year, and save it  as string for the final query
   */
  const issueYear =
    "issueYear=" + new Date(Date.parse(date)).getFullYear() + "&";

  /**
   * Save issueYear= and month parsed in by date .getMonth() will return only the year, and save it  as string for the final query
   * getMonth() gives number from 0 to 11 hence the + 1 after getMonth()
   */
  const issueMonth =
    "issueMonth=" + new Date(Date.parse(date)).getMonth() + 1 + "&";

  /**
   * Save certId= and the certification ID, then save it as string for the final query
   * "window.location.href.split("/").findLast((y) => y" Splits the URL and keep the last part which would be the ID
   * Example: https://www.coursera.org/account/accomplishments/verify/123456789abcd => 123456789abcd
   */
  const certId =
    "certId=" + window.location.href.split("/").findLast((y) => y) + "&";

  /**
   * Save certUrl=url& as string for the final query
   */
  const certUrl = "certUrl=" + window.location.href;

  /**
   * Creating button simialr to what Coursera already have, reusing their classes so the button get the same style
   */
  var div = document.createElement("div");
  div.setAttribute(
    "class",
    "rc-ShareButtonWithModal rc-CertificateSharing__share-button"
  );
  var button = document.createElement("button");
  button.setAttribute("class", "_1hx9z6hg()");
  button.setAttribute("onclick", "addToLinkedIn()");
  var spanOuter = document.createElement("span");
  spanOuter.setAttribute("class", "_1lutnh9y");
  var spanInner = document.createElement("span");
  spanInner.setAttribute("class", "_k5dnrzp cui-iconWrapper");
  spanOuter.innerText = "Add To LinkedIn";

  document.getElementsByClassName();
  function addToLinkedIn() {
    console.log("Hey");
  }

  window.onload = (event) => {
    var x = document.querySelector(
      "#rendered-content > div > div > div:nth-child(2) > div > div > div._jyhj5r > div:nth-child(2) > div.rc-CertificateSharing > div"
    );
    if (x != null) {
      var div = document.createElement("div");
      div.setAttribute(
        "class",
        "rc-ShareButtonWithModal rc-CertificateSharing__share-button"
      );
      x.appendChild(div);
    }
  };
})();
