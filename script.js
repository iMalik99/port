
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = document.querySelectorAll('#mobile-menu a, .fixed a');

            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (!mobileMenu.classList.contains('hidden')) {
                         mobileMenu.classList.add('hidden');
                    }
                });
            });

            const tabButtons = document.querySelectorAll('.tab-button');
            const projectCards = document.querySelectorAll('.project-card');

            function filterProjects(category) {
                projectCards.forEach(card => {
                    if (card.dataset.category === category) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });

                tabButtons.forEach(button => {
                    if (button.id.startsWith(category)) {
                        button.classList.add('active');
                        button.classList.remove('text-gray-400', 'hover:text-white');
                    } else {
                        button.classList.remove('active');
                        button.classList.add('text-gray-400', 'hover:text-white');
                    }
                });
            }

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.id.split('-')[0];
                    filterProjects(category);
                });
            });

            filterProjects('frontend');
        });