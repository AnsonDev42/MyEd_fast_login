// ==UserScript==
// @name         MyEd Portal Fast Login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automate the login process for Uni of Edinburgh
// @author       ans0n+ChatGPT
// @match        https://www.ease.ed.ac.uk/*
// @match        https://www.learn.ed.ac.uk/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const username = "Replace_to_Your_school_email_for_login";
  const password = "Replace_to_Your_Password_for_login";

  function login() {
    const loginButton = document.querySelector(".easelogin-bt");

    if (loginButton) {
      console.log("Faster login button found");
      loginButton.click();
      waitForElement("#login", fillUsername);
    } else {
      waitForElement("#login", fillUsername);
    }
  }

  function fillUsername() {
    const usernameInput = document.querySelector("#login");
    const submitButton = document.querySelector("#submit");

    if (usernameInput && submitButton) {
      usernameInput.value = username;
      submitButton.click();
      waitForElement("#password", fillPassword);
    }
  }

  function fillPassword() {
    const passwordInput = document.querySelector("#password");
    const submitButton = document.querySelector("#submit");

    if (passwordInput && submitButton) {
      passwordInput.value = password;
      submitButton.click();
    }
  }

  function waitForElement(selector, callback) {
    const element = document.querySelector(selector);

    if (element) {
      callback();
    } else {
      setTimeout(() => {
        waitForElement(selector, callback);
      }, 50); // query every 50ms, can be adjusted
    }
  }

  login();
})();
