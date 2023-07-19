// ==UserScript==
// @name         Zenva Academy Certification Button
// @namespace    Zenva Academy
// @version      1
// @description  Adds a button on your Zenva Academy certificates page for spesific certifications. This button when clicked takes information from the site and adds it to the Linkedin Certification
// @author       MrPrecise
// @match        https://academy.zenva.com/course/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zenva.com
// @homepageURL  https://github.com/MrPrecise/Linkedin-Certification-Button/
// ==/UserScript==

(function () {
  /**
   * Making sure the whole page is loaded before using the script by running the window.onload()
   * This ensures no information is not lost in the transfer
   */
  window.onload = (event) => {
    /**
     * If statement if true it carries out the code
     * The statment is checking if the course is finished or it's a course that is not
     * div.course-meta can contain either next lesson or certifcation button to view your certification
     * If it's not next lesson it will add the button
     */
    if (
      !document
        .querySelector(
          "body > div.wrapper > div > div.main > article > div.course-meta"
        )
        .getInnerHTML()
        .startsWith(` <a id="zva-continue-lesson"`)
    ) {
      /**
       * Selecting the coursename and save it as string
       * The query selecter select the div containing the name of the course
       */
      let courseName = document
        .querySelector(
          "body > div.wrapper > div > div.main > article > div.course-title > div > h4"
        )
        .getInnerHTML();

      /**
       *
       */
      const addCertificationUrl =
        "https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&";

      /**
       * Save name=coursename& as string for the final query
       */
      const name = "name=" + courseName + "&";

      /**
       * Save organizationId=3130543& as string (3130543 Is Zenva Orginization ID on LinkedIn)
       */
      const organizationId = "organizationId=" + 3228633 + "&";

      /**
       * Save issueYear= and year parsed in by date .getFullYear() will return only the year, and save it  as string for the final query
       */
      const issueYear = "issueYear=" + new Date().getFullYear() + "&";

      /**
       * Save issueYear= and the current month (I couldn't find a way to take the actual cert date from the site), from date .getMonth() will return only the month, and save it  as string for the final query
       * getMonth() gives number from 0 to 11 hence the + 1 after getMonth()
       */
      const issueMonth = "issueMonth=" + (new Date().getMonth() + 1) + "&";

      /**
       * Save certId= and the certification ID, then save it as string for the final query
       * "querySelector().split("/").findLast((y) => y" Splits the URL and keep the last part which would be the ID
       *   Since Zenva don't have their own page for your certifications, the URL is taken from the button that brings you to the URL
       * Example: https://academy.zenva.com/certificate/123456789abcd => 123456789abcd
       */
      const certId =
        "certId=" +
        document
          .querySelector(
            "body > div.wrapper > div > div.main > article > div.course-meta > p > a.btn.course_page-view-certificate"
          )
          .getAttribute("href")
          .split("/")
          .findLast((y) => y) +
        "&";

      /**
       * Save certUrl=querySelector()& as string for the final query
       * Since Zenva don't have their own page for your certifications, the URL is taken from the button that brings you to the URL
       */
      const certUrl =
        "certUrl=" +
        document
          .querySelector(
            "body > div.wrapper > div > div.main > article > div.course-meta > p > a.btn.course_page-view-certificate"
          )
          .getAttribute("href");

      /**
       * Finds the button container div for Zenva where the buttons for sharing and downloading your certificates
       */
      var buttonSection = document.querySelector(
        "body > div.wrapper > div > div.main > article > div.course-meta > p"
      );

      /**
       * Adds our own button to the collection and link it to our addToLinkedIn() function
       */
      buttonSection.insertAdjacentHTML(
        "afterbegin",
        `<a class="btn course_page-view-certificate" target="_blank" title="View Certificate">Add to LinkedIn</a><span> </span>`
      );
      buttonSection.onclick = function () {
        addToLinkedIn();
      };

      /**
       * Opens the LinkedIn in new tab with your certification information filled in
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
    }
  };
})();
