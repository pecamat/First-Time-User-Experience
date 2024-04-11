// Selectors for controls/inputs

const animationName = document.querySelector("#input-name");
const animationRole = document.querySelector("#input-role");
const animationDSname = document.querySelector("#input-dsname");
const animationCompany = document.querySelector("#input-company");
const animationRoleTitle = document.querySelector("#select-role-title");
const animationTeamSize = document.querySelector("#select-team-size");

// Triggers

animationName.oninput = updateName;
animationRole.oninput = roleAnimation;
animationRole.onclick = roleOpenAnimation;
animationRole.onblur = roleCloseAnimation;
animationDSname.oninput = dsnameAnimation;
animationCompany.onclick = companyAnimation;
animationCompany.oninput = companyAnimationType;
animationCompany.onblur = companyAnimationOut;
animationRoleTitle.onchange = getRoleTitle;
animationTeamSize.onchange = getTeamSize;

// Animation Selectors

const animationDesigner = document.querySelector(".animation-designer");
const animationDeveloper = document.querySelector(".animation-developer");
const animationProduct = document.querySelector(".animation-product");
const animationMarketing = document.querySelector(".animation-marketing");
const animationOther = document.querySelector(".animation-other");
const animationNameDestination = document.querySelector("#name");
const animationCursor = document.querySelector(".cursor");
const animationJob = document.querySelector(".avatar-tooltip");
const animationRoleDestination = document.querySelector(".avatar-tooltip-role");
const animationDSnameDestination = document.querySelector(".dsname");
const animationAvatar = document.querySelector(".avatar");
const animationAvatarDestination = document.querySelector(".avatar-text");
const animationCompanyDestination1 = document.querySelector(".company-short");
const animationCompanyDestination2 = document.querySelector(".company-full");
const animationCompanyReverse1 = document.querySelector(".company-animation");
const animationCompanyReverse2 = document.querySelector(".company-caret");
const animationCompanyButton = document.querySelector(".animation-company");

// Your name

var userName = "";

function updateName() {
  userName = animationName.value;
  animationNameDestination.innerHTML = userName;
  animationAvatar.style.display = "flex";
  animationAvatarDestination.innerHTML = userName.substr(0, 1);
  console.log(userName);
}

// Your Company

function companyAnimation() {
  animationCompanyButton.style.display = "block";
  animationCompanyReverse1.classList.add("company-animation");
  animationCompanyReverse1.classList.remove("company-animation-reverse");
  animationCompanyReverse2.classList.add("animation-opacity");
  animationCompanyReverse2.classList.remove("animation-opacity-reverse");
}

var companyName = "";

function companyAnimationType() {
  companyName = animationCompany.value;
  animationCompanyDestination1.innerHTML = companyName.substr(0, 1);
  animationCompanyDestination2.innerHTML = companyName.substr(1);
}

function companyAnimationOut() {
  animationCompanyReverse1.classList.remove("company-animation");
  animationCompanyReverse1.classList.add("company-animation-reverse");
  animationCompanyReverse2.classList.remove("animation-opacity");
  animationCompanyReverse2.classList.add("animation-opacity-reverse");
}

// Your job title

var jobTitle = "";

function roleAnimation() {
  jobTitle = animationRole.value;
  animationRoleDestination.style.display = "block";
  animationRoleDestination.innerHTML = jobTitle;
}

function roleOpenAnimation() {
  animationJob.classList.add("avatar-tooltip-transition");
}

function roleCloseAnimation() {
  animationJob.classList.remove("avatar-tooltip-transition");
}

// Design system name

var dsName = "";

function dsnameAnimation() {
  dsName = animationDSname.value;
  animationDSnameDestination.innerHTML = dsName;
}

// Team size

var teamSize = 1;

function getTeamSize() {
  teamSize = parseInt(animationTeamSize.value);
  updateAvatarsWidth();
}

function updateAvatarsWidth() {
  switch (teamSize) {
    case 1:
      {
        document.querySelector("#avatars-team").style.width = "0px";
        document.querySelector(".user-1").classList.remove("user-1-show");
        document.querySelector(".user-2").classList.remove("user-2-show");
        document.querySelector(".user-3").classList.remove("user-3-show");
      }
      break;
    case 2:
      {
        document.querySelector("#avatars-team").style.width = "28px";
        document.querySelector(".user-1").classList.add("user-1-show");
        document.querySelector(".user-2").classList.remove("user-2-show");
        document.querySelector(".user-3").classList.remove("user-3-show");
      }
      break;
    case 3:
      {
        document.querySelector("#avatars-team").style.width = "56px";
        document.querySelector(".user-1").classList.add("user-1-show");
        document.querySelector(".user-2").classList.add("user-2-show");
        document.querySelector(".user-3").classList.remove("user-3-show");
      }
      break;
    case 4:
      {
        document.querySelector("#avatars-team").style.width = "84px";
        document.querySelector(".user-1").classList.add("user-1-show");
        document.querySelector(".user-2").classList.add("user-2-show");
        document.querySelector(".user-3").classList.add("user-3-show");
      }
      break;
  }
}

//  Role

var roleTitle = 0;

function getRoleTitle() {
  roleTitle = parseInt(animationRoleTitle.value);
  updateRoleTitle();
}

function updateRoleTitle() {
  animationDesigner.style.display = "none";
  animationDeveloper.style.display = "none";
  animationProduct.style.display = "none";
  animationMarketing.style.display = "none";
  animationOther.style.display = "none";
  switch (roleTitle) {
    case 1:
      animationDesigner.style.display = "block";
      animationDesigner.classList.add("play-animation");
      break;
    case 2:
      animationDeveloper.style.display = "block";
      animationDeveloper.classList.add("play-animation");
      break;
    case 3:
      animationProduct.style.display = "block";
      animationProduct.classList.add("play-animation");
      break;
    case 4:
      animationMarketing.style.display = "block";
      animationMarketing.classList.add("play-animation");
      break;
    case 5:
      animationOther.style.display = "block";
      animationOther.classList.add("play-animation");
      break;
  }
}

// Shows selected Role Title illustration without animation

window.onload = function () {
  animationDesigner.style.display = "none";
  animationDeveloper.style.display = "none";
  animationProduct.style.display = "none";
  animationMarketing.style.display = "none";
  animationOther.style.display = "none";
  switch (roleTitle) {
    case 1:
      animationDesigner.style.display = "block";
      break;
    case 2:
      animationDeveloper.style.display = "block";
      break;
    case 3:
      animationProduct.style.display = "block";
      break;
    case 4:
      animationMarketing.style.display = "block";
      break;
    case 5:
      animationOther.style.display = "block";
      break;
  }
};
