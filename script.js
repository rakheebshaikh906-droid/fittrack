let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

const exerciseInput = document.getElementById("exercise");
const setsInput = document.getElementById("sets");
const repsInput = document.getElementById("reps");
const weightInput = document.getElementById("weight");

const addBtn = document.getElementById("addBtn");

const workoutList = document.getElementById("workoutList");


function displayWorkouts() {

    workoutList.innerHTML = "";

    workouts.forEach(function (workout) {

        const workoutCard = `
            <div class="workout-card">
                <h3>${workout.exercise}</h3>
                <p>Sets: ${workout.sets}</p>
                <p>Reps: ${workout.reps}</p>
                <p>Weight: ${workout.weight} kg</p>

                <button class="deleteBtn">Delete</button>
            </div>
        `;

        workoutList.innerHTML += workoutCard;

    });

}
displayWorkouts();

addBtn.addEventListener("click", function () {

    const exercise = exerciseInput.value;
    const sets = setsInput.value;
    const reps = repsInput.value;
    const weight = weightInput.value;

    if (
        exercise === "" ||
        sets === "" ||
        reps === "" ||
        weight === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    const workout = {
        exercise,
        sets,
        reps,
        weight
    };
    workouts.push(workout);
    localStorage.setItem("workouts", JSON.stringify(workouts));

    displayWorkouts();

    const deleteButtons = document.querySelectorAll(".deleteBtn");

    deleteButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.parentElement.remove();

        });

    });

    exerciseInput.value = "";
    setsInput.value = "";
    repsInput.value = "";
    weightInput.value = "";

});