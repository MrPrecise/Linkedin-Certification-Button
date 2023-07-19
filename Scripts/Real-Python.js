// ==UserScript==
// @name         Real Python Certification Button
// @namespace    Real Python
// @version      1
// @description  Adds a button on your Real Python certificates page for spesific certifications. This button when clicked takes information from the site and adds it to the Linkedin Certification
// @author       MrPrecise
// @match        https://realpython.com/certificates/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=realpython.com
// @homepageURL  https://github.com/MrPrecise/Linkedin-Certification-Button/
// ==/UserScript==

(function () {
  /**
   * Making sure the whole page is loaded before using the script by running the window.onload()
   * This ensures no information is not lost in the transfer
   */
  window.onload = (event) => {
    /**
     * Select the date on the Real Python webpage and select the <p> with "<strong>Completion Date:</strong> Month DD, Year"
     * The query selecter select the div containing the date
     */
    let date = document.querySelector(
      "body > div.container.main-content > div > div.col-12.my-0.noselect > figure > div > div.w-100.d-flex > div > div > p.mb-0"
    ).innerHTML;

    /**
     * Remove the excess "Completion Date" HTML and save it as "Month DD, Year" format as string
     * The query selecter select the div containing the name of the course
     */
    date = date.split("<strong>Completion Date:</strong> ").findLast((y) => y);

    /**
     * Selecting the coursename and save it as string
     */
    let courseName = document.querySelector(
      "body > div.container.main-content > div > div.col-12.my-0.noselect > figure > div > div.w-100.d-flex > div > div > h1 > em"
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
     * Save organizationId=3130543& as string (3130543 Is Real Python Orginization ID on LinkedIn)
     * The final string is extending the addCertificationUrl in the addToLinkedIn() to complete the link to transfer the data contianing the
     * Orginization ID of Real Python on LinkedIn
     */
    const organizationId = "organizationId=" + 3130543 + "&";

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
     * Example: https://realpython.com/certificates/123456789abcd => 123456789abcd
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
     * Finds the button container div for Real Python where the buttons for sharing and downloading your certificates
     */
    var buttonSection = document.querySelector(
      "body > div.container.main-content > div > div.col-md-11.col-lg-8.article > div.text-center.my-3.d-print-none > span"
    );

    /**
     * Adds our own button to the collection and link it to our addToLinkedIn() function
     */
    buttonSection.insertAdjacentHTML(
      "afterbegin",
      `<a class="mr-1 btn btn-sm badge-linkedin text-light mb-1"><i class="mr-1 fa fa-linkedin text-light"></i>Add to LinkedIn</a>`
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
