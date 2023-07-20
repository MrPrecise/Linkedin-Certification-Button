// ==UserScript==
// @name         Coursera Certification Button
// @namespace    Coursera
// @version      1
// @description  Adds a button on your coursera accomplishments page for spesific certifications. This button when clicked takes information from the site and adds it to the Linkedin Certification
// @author       MrPrecise
// @match        https://www.coursera.org/account/accomplishments/verify/*
// @match        https://www.coursera.org/account/accomplishments/professional-cert/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coursera.org
// @homepageURL  https://github.com/MrPrecise/Linkedin-Certification-Button/
// ==/UserScript==

(function () {
  /**
   * Making sure the whole page is loaded before using the script by running the window.onload()
   * This ensures no information is not lost in the transfer
   */
  window.onload = (event) => {
    /**
     * Select the date on the Coursera webpage and save it as "Month DD, Year" format as string
     * The query selecter select the div containing the date
     */
    let date = document.querySelector(
      "#rendered-content > div > div > div:nth-child(2) > div > div > div._jyhj5r > div._pu0m129.left-col > div.rc-CompletionOverview > div > div.course-details > p:nth-child(2) > strong"
    ).innerHTML;

    /**
     * Selecting the coursename and save it as string
     * The query selecter select the div containing the name of the course
     */
    let courseName = document.querySelector(
      "#rendered-content > div > div > div:nth-child(2) > div > div > div._jyhj5r > div._pu0m129.left-col > div.rc-ProductOverviewSnippet.horizontal-box > div > div.vertical-box.info-content > div.course-name-container.flex-1 > h3 > a"
    ).innerHTML;

    /**
     * Store the start of the link in a variable where you can build the data extending the URL
     */
    const addCertificationUrl =
      "https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&";

    /**
     * Save name=coursename& as string for the final query
     * The final string is extending the addCertificationUrl in the addToLinkedIn() to complete the link to transfer the data contianing the coursename
     */
    const name = "name=" + courseName + "&";

    /**
     * Save organizationId=2453129& as string (2453129 Is Courseras Orginization ID on LinkedIn)
     * The final string is extending the addCertificationUrl in the addToLinkedIn() to complete the link to transfer the data contianing the
     * Orginization ID of Coursera on LinkedIn
     */
    const organizationId = "organizationId=" + 2453129 + "&";

    /**
     * Save issueYear= and year parsed in by date .getFullYear() will return only the year, and save it  as string for the final query
     * The final string is extending the addCertificationUrl in the addToLinkedIn() to complete the link to transfer the data contianing the Year of Compleation
     */
    const issueYear =
      "issueYear=" + new Date(Date.parse(date)).getFullYear() + "&";

    /**
     * Save issueYear= and month parsed in by date .getMonth() will return only the month, and save it  as string for the final query
     * getMonth() gives number from 0 to 11 hence the + 1 after getMonth()
     * The final string is extending the addCertificationUrl in the addToLinkedIn() to complete the link to transfer the data contianing the Month of Completion
     */
    const issueMonth =
      "issueMonth=" + (new Date(Date.parse(date)).getMonth() + 1) + "&";

    /**
     * Save certId= and the certification ID, then save it as string for the final query
     * "window.location.href.split("/").findLast((y) => y" Splits the URL and keep the last part which would be the ID
     * Example: https://www.coursera.org/account/accomplishments/verify/123456789abcd => 123456789abcd
     * The final string is extending the addCertificationUrl in the addToLinkedIn() to complete the link to transfer the data contianing the Certification ID
     */
    const certId =
      "certId=" + window.location.href.split("/").findLast((y) => y) + "&";

    /**
     * Save certUrl=url& as string for the final query
     * The final string is extending the addCertificationUrl in the addToLinkedIn() to complete the link to transfer the data contianing the URL To the Certificate
     */
    const certUrl = "certUrl=" + window.location.href;

    /**
     * Finds the button container div for coursera where the buttons for sharing and downloading your certificates
     * The div: rc-CertificateSharing__box
     */
    var buttonSection = document.querySelector(
      "#rendered-content > div > div > div:nth-child(2) > div > div > div._jyhj5r > div:nth-child(2) > div.rc-CertificateSharing > div"
    );

    /**
     * Adds our own button to the collection and link it to our addToLinkedIn() function
     */
    buttonSection.insertAdjacentHTML(
      "afterbegin",
      `<div class="rc-ShareButtonWithModal rc-CertificateSharing__share-button"><button class="_1hx9z6hg"><span class="_1lutnh9y"><span class="_k5dnrzp cui-iconWrapper"></span>Add to LinkedIn</span></button></div>`
    );
    buttonSection.onclick = function () {
      addToLinkedIn();
    };

    /**
     * Opens the LinkedIn in new tab with your certification information filled into the input field in
     */
    function addToLinkedIn() {
      window.open(
        addCertificationUrl +
          name +
          organizationId +
          issueMonth +
          issueYear +
          certId +
          certUrl,
        "_blank"
      );
    }
  };
})();
