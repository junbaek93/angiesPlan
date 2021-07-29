let navlinks = document.querySelectorAll(".nav-links li a");
let progress = document.querySelector(".progress-section");
let plan = document.querySelector(".plan-section");
let workout = document.querySelector(".workout-section");
let recipes = document.querySelector(".recipes-section");
let social = document.querySelector(".social-section");
let support = document.querySelector(".support-section");

var index;

let toggle = function(index) {
    if(navlinks[index].textContent == "Progress"){
        progress.style.display = "inline-block";
        plan.style.display = "none";
        workout.style.display = "none";
        recipes.style.display = "none";
        social.style.display = "none";
        support.style.display = "none";

    }
    else if(navlinks[index].textContent == "Plan"){
        progress.style.display = "none";
        plan.style.display = "inline-block";
        workout.style.display = "none";
        recipes.style.display = "none";
        social.style.display = "none";
        support.style.display = "none";
    }
    else if(navlinks[index].textContent == "Workout"){
        progress.style.display = "none";
        plan.style.display = "none";
        workout.style.display = "inline-block";
        recipes.style.display = "none";
        social.style.display = "none";
        support.style.display = "none";
    }
    else if(navlinks[index].textContent == "Recipes"){
        progress.style.display = "none";
        plan.style.display = "none";
        workout.style.display = "none";
        recipes.style.display = "inline-block";
        social.style.display = "none";
        support.style.display = "none";
    }
    else if(navlinks[index].textContent == "Social"){
        progress.style.display = "none";
        plan.style.display = "none";
        workout.style.display = "none";
        recipes.style.display = "none";
        social.style.display = "inline-block";
        support.style.display = "none";
    }
    else if(navlinks[index].textContent == "Support"){
        progress.style.display = "none";
        plan.style.display = "none";
        workout.style.display = "none";
        recipes.style.display = "none";
        social.style.display = "none";
        support.style.display = "inline-block";
        }

}
