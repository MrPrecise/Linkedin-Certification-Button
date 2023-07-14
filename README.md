# LinkedIn Certification Button

Adds a button for various sites grabbing the information, turning it into a URL and opening it a new tab.
Using the table under you can make your own URLs, the information used in this project is:
name, organizationId, issueYear, issueMonth, certId and certUrl

| **Information** |  **Description**|	**Dummy Value** |
|--|--|--|
| name | What you want the Certificate to be named | Test Certificate |  
|organizationId*|Your organization ID (if your organization has an existing page on LinkedIn)|1337|
| organizationName* | Your organization name (if your organization doesn’t have an existing page on LinkedIn) | LinkedIn |  
| issueYear | Year the certificate was issued | 2018 |  
| issueMonth | Month the certificate was issued | 2 |  
| expirationYear | Year the certificate expires | 2020 |  
| expirationMonth | Month the certificate expires | 5 |  
| certId | Certificate ID | 1234 |  
| certUrl | Credential URL | https://www.linkedin.com/path/to/certificate/1234 |  

 *When defining your custom fields, please pick between ‘organizationId’ and ‘organizationName’. The two cannot be included at the same time. If your organization has an existing page on LinkedIn, we recommend you use the ‘organizationId’ field. If your organization does not have an existing page on LinkedIn, please use the ‘organizationName’ field instead.

More information about the table over and more, visit [LinkedIn Add To Profile](https://addtoprofile.linkedin.com/)


## Prerequisite

[Tampermonkey](https://www.tampermonkey.net/)

## Current Scripts
- [Coursera](https://github.com/MrPrecise/Linkedin-Certification-Button/blob/main/Scripts/Coursera.js)
- [Real Python](https://github.com/MrPrecise/Linkedin-Certification-Button/blob/main/Scripts/Real-Python.js)

## Installation

1.  Install  [Tampermonkey](https://tampermonkey.net/)
2.  Select a script in this repo that you wish to use. 
3. View the file and click the ***Raw*** button at the top of the file to view its source
4.  CTRL + A (Select all), Then CTRL + C (Copy selected area)
5.  Click on Tampermonkey addon in your browser and click the "Create a new script..."
6.  Paste the script into the window and hit save

## Walkthrough
[![Image from Gyazo](https://i.gyazo.com/656cb0bf432f7f9446dc2b5da8c0d3c5.gif)](https://gyazo.com/656cb0bf432f7f9446dc2b5da8c0d3c5)
[![Image from Gyazo](https://i.gyazo.com/4efa7ca1f24b9fe4c5f34dd7df645038.gif)](https://gyazo.com/4efa7ca1f24b9fe4c5f34dd7df645038)
