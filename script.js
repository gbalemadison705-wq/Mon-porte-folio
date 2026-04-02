// Animation au chargement
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Portfolio chargé avec succès !');
    console.log('🚀 Déployé via ma plateforme CI/CD');
    
    // Animation des compétences
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
    });
});

// Message de bienvenue
setTimeout(() => {
    console.log('💡 Site déployé automatiquement depuis GitHub !');
}, 1000);