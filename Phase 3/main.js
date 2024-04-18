var stateAuthorizing = "loading";
var stateLoading = "resting";
var stateImporting = "resting";

function updateStateAuthorizing(value) {
  stateAuthorizing = value;
  switch (stateAuthorizing) {
    case "resting": updateState('authorizing-figma', 'resting', 'Authorizing Figma'); break;
    case "loading": updateState('authorizing-figma', 'loading', 'Authorizing Figma'); break;
    case "success": updateState('authorizing-figma', 'success', 'Authorized Figma'); break;
    case "error": updateState('authorizing-figma', 'error', 'Unable to authorize'); break;
  }
};

function updateStateLoading(value) {
  stateLoading = value;
  switch (stateLoading) {
    case "resting": updateState('loading-styles', 'resting', 'Loading styles from Figma'); break;
    case "loading": updateState('loading-styles', 'loading', 'Loading styles from Figma'); break;
    case "success": updateState('loading-styles', 'success', 'Loaded styles from Figma'); break;
    case "error": updateState('loading-styles', 'error', 'Unable to load Figma styles'); break;
  }
};

function updateStateImporting(value) {
  stateImporting = value;
  switch (stateImporting) {
    case "resting": updateState('importing-styles', 'resting', 'Importing styles as tokesn'); break;
    case "loading": updateState('importing-styles', 'loading', 'Importing styles as tokens'); break;
    case "success": updateState('importing-styles', 'success', 'Imported styles as tokens'); break;
    case "error": updateState('importing-styles', 'error', 'Unable to import Figma styles'); break;
  }
};

function updateState(elementId, state, label) {

  var destination = document.getElementById(elementId);
  
  var allIcons = destination.querySelectorAll('.state-icon-resting, .state-icon-loading, .state-icon-success, .state-icon-error');
  allIcons.forEach(item => item.style.display = 'none');

  destination.querySelector('.state-icon-' + state).style.display = "block";
  destination.querySelector('.state-label').innerHTML = label;

  (state == 'resting') ? destination.querySelector('.state-label').style.color = "#7F8694" : destination.querySelector('.state-label').style.color = "#14171F";

  (state == 'loading') ? destination.querySelector('.connect-line').style.display = "block" : destination.querySelector('.connect-line').style.display = "none";
}

updateStateAuthorizing(stateAuthorizing);
updateStateLoading(stateLoading);
updateStateImporting(stateImporting);
