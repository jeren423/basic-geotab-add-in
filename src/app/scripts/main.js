/* eslint-disable */
import React from "react";
import { createRoot } from 'react-dom/client';
import { AddinContext, IGeotabApi, IGeotabPage } from "./contexts/addinContext";
import App from './components/App'
import "../styles/index.css";

/**
 * @returns {{initialize: Function, focus: Function, blur: Function, startup; Function, shutdown: Function}}
 */
geotab.addin.proto = function (api, state, meta) {
  'use strict';
  const appName = 'proto';
  const addinId = 'aDUxZmY1NTUtY2Y2Yi00MDR';
  let reactRoot;
    
    // the root container
    var elAddin = document.getElementById(appName);
  
  function startAddIn() {
    function initializeReactApp() {
      try {
        reactRoot.render(
          <React.StrictMode>
            <AddinContext.Provider
              value={{
                geoApi: api,
                pageApi: state,
                currentUser: null,
                localizer: {},
                addinElement: elAddin,
                userAddInSecurityIdentifiers: [],
                addAddinListener: () => () => { }
              }}
            >
              <App />
            </AddinContext.Provider>
          </React.StrictMode>
        );
      } catch (e) {
        console.log(e);
        alert(e);
      }
    }

    initializeReactApp();
  }
  
  return {
    
    /**
     * initialize() is called only once when the Add-In is first loaded. Use this function to initialize the
     * Add-In's state such as default values or make API requests (MyGeotab or external) to ensure interface
     * is ready for the user.
     * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
     * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
     * @param {function} initializeCallback - Call this when your initialize route is complete. Since your initialize routine
     *        might be doing asynchronous operations, you must call this method when the Add-In is ready
     *        for display to the user.
     */
    initialize: function (freshApi, freshState, initializeCallback) {
      // Loading translations if available
      if (freshState.translate) {
        freshState.translate(elAddin || '');
      }
        reactRoot = createRoot(elAddin);
      // MUST call initializeCallback when done any setup
        initializeCallback();
    },

    /**
     * focus() is called whenever the Add-In receives focus.
     *
     * The first time the user clicks on the Add-In menu, initialize() will be called and when completed, focus().
     * focus() will be called again when the Add-In is revisited. Note that focus() will also be called whenever
     * the global state of the MyGeotab application changes, for example, if the user changes the global group
     * filter in the UI.
     *
     * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
     * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
    */
    focus: function (freshApi, freshState) {
        elAddin.className = elAddin.className.replace('hidden', '').trim();
        startAddIn(elAddin, reactRoot)
    },

    /**
     * blur() is called whenever the user navigates away from the Add-In.
     *
     * Use this function to save the page state or commit changes to a data store or release memory.
     *
     * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
     * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
    */
    blur: function () {
      
    }
  };
};
