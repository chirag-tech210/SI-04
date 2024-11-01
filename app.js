// Toggle experience section visibility
function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

// Show project details
function showProjectDetails(id) {
    const details = document.getElementById(id);
    details.style.display = 'block';
}

// Render skill chart using Chart.js
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 85, 80, 75, 70],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});
function generatePDF() {
    const resume = document.querySelector(".resume-container");
    html2pdf()
        .from(resume)
        .set({
            margin: 1,
            filename: 'JohnDoe_Resume.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { format: 'a4', orientation: 'portrait' }
        })
        .save();
}