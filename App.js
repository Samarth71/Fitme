// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Start Workout
function startWorkout() {
    alert('🏋️ Let\'s go! Workout started!\n\nGet ready to crush your goals! 💪');
}

// Log Meal
function logMeal() {
    const meal = prompt('What did you eat today?');
    if (meal) {
        const calories = prompt('How many calories? (estimate)');
        if (calories) {
            alert(`✅ Logged: ${meal} (${calories} kcal)`);
        }
    }
}

// View Goals
function viewGoals() {
    alert('🎯 Your Goals:\n\n• Daily Calories: 2500 kcal\n• Weekly Workout: 5 days\n• Water: 8 glasses\n• Steps: 10,000\n\nYou\'re doing great! Keep it up! 🚀');
}

// Add Workout
function addWorkout() {
    const workoutType = prompt('Type of workout? (e.g., Running, Gym, Yoga):');
    if (workoutType) {
        const duration = prompt('Duration (minutes)?');
        if (duration) {
            const workoutList = document.getElementById('workoutList');
            const newWorkout = document.createElement('div');
            newWorkout.className = 'workout-card';
            newWorkout.innerHTML = `
                <div class="workout-header">
                    <h3>✨ ${workoutType}</h3>
                    <span class="badge badge-progress">⏳ In Progress</span>
                </div>
                <p>${duration} minutes</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 50%"></div>
                </div>
                <small>Just now</small>
            `;
            workoutList.insertBefore(newWorkout, workoutList.firstChild);
            alert(`✅ Added: ${workoutType} - ${duration} min`);
        }
    }
}

// Update greeting based on time
window.addEventListener('load', () => {
    const hour = new Date().getHours();
    const h1 = document.querySelector('.dashboard h1');
    
    if (hour < 12) {
        h1.textContent = 'Good Morning! ☀️';
    } else if (hour < 18) {
        h1.textContent = 'Good Afternoon! 🌤️';
    } else {
        h1.textContent = 'Good Evening! 🌙';
    }
});

console.log('✅ FitMe App Loaded!');