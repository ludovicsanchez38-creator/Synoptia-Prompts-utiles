// Global state
let allPrompts = [];
let filteredPrompts = [];
let categories = [];
let currentFilters = {
    search: '',
    category: 'all',
    difficulty: 'all'
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const resetFiltersBtn = document.getElementById('resetFilters');
const categoriesNav = document.getElementById('categoriesNav');
const promptsSection = document.getElementById('promptsSection');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');
const promptModal = document.getElementById('promptModal');
const toast = document.getElementById('toast');

// Stats elements
const totalPromptsEl = document.getElementById('totalPrompts');
const displayedPromptsEl = document.getElementById('displayedPrompts');
const totalCategoriesEl = document.getElementById('totalCategories');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupEventListeners();
});

// Load data from JSON
async function loadData() {
    try {
        const response = await fetch('prompts-data.json');
        const data = await response.json();

        categories = data.categories;

        // Flatten all prompts with category info
        allPrompts = categories.flatMap(category =>
            category.prompts.map(prompt => ({
                ...prompt,
                categoryId: category.id,
                categoryName: category.name,
                categoryIcon: category.icon
            }))
        );

        filteredPrompts = [...allPrompts];

        updateStats();
        populateCategoryFilter();
        renderCategoriesNav();
        renderPrompts();

        loading.classList.add('hidden');
    } catch (error) {
        console.error('Error loading data:', error);
        loading.innerHTML = '<p style="color: #f87171;">Error loading prompts. Please refresh the page.</p>';
    }
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    categoryFilter.addEventListener('change', handleCategoryFilter);
    difficultyFilter.addEventListener('change', handleDifficultyFilter);
    resetFiltersBtn.addEventListener('click', resetFilters);
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle search
function handleSearch(e) {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
}

// Handle category filter
function handleCategoryFilter(e) {
    currentFilters.category = e.target.value;
    applyFilters();
}

// Handle difficulty filter
function handleDifficultyFilter(e) {
    currentFilters.difficulty = e.target.value;
    applyFilters();
}

// Reset all filters
function resetFilters() {
    currentFilters = {
        search: '',
        category: 'all',
        difficulty: 'all'
    };

    searchInput.value = '';
    categoryFilter.value = 'all';
    difficultyFilter.value = 'all';

    // Remove active class from category chips
    document.querySelectorAll('.category-chip').forEach(chip => {
        chip.classList.remove('active');
    });

    applyFilters();
}

// Apply all filters
function applyFilters() {
    filteredPrompts = allPrompts.filter(prompt => {
        // Search filter
        const searchMatch = !currentFilters.search ||
            prompt.title.toLowerCase().includes(currentFilters.search) ||
            prompt.description.toLowerCase().includes(currentFilters.search) ||
            prompt.tags.some(tag => tag.toLowerCase().includes(currentFilters.search)) ||
            prompt.prompt.toLowerCase().includes(currentFilters.search);

        // Category filter
        const categoryMatch = currentFilters.category === 'all' ||
            prompt.categoryId === currentFilters.category;

        // Difficulty filter
        const difficultyMatch = currentFilters.difficulty === 'all' ||
            prompt.difficulty === currentFilters.difficulty;

        return searchMatch && categoryMatch && difficultyMatch;
    });

    updateStats();
    renderPrompts();
}

// Update statistics
function updateStats() {
    totalPromptsEl.textContent = allPrompts.length;
    displayedPromptsEl.textContent = filteredPrompts.length;
    totalCategoriesEl.textContent = categories.length;
}

// Populate category filter dropdown
function populateCategoryFilter() {
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.icon} ${category.name}`;
        categoryFilter.appendChild(option);
    });
}

// Render categories navigation
function renderCategoriesNav() {
    categoriesNav.innerHTML = categories.map(category => `
        <div class="category-chip" data-category="${category.id}" onclick="filterByCategory('${category.id}')">
            <span class="category-icon">${category.icon}</span>
            <span>${category.name}</span>
        </div>
    `).join('');
}

// Filter by category chip
function filterByCategory(categoryId) {
    currentFilters.category = categoryId;
    categoryFilter.value = categoryId;

    // Update active state
    document.querySelectorAll('.category-chip').forEach(chip => {
        if (chip.dataset.category === categoryId) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });

    applyFilters();

    // Scroll to category
    const categorySection = document.getElementById(`category-${categoryId}`);
    if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Render prompts by category
function renderPrompts() {
    if (filteredPrompts.length === 0) {
        promptsSection.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    promptsSection.classList.remove('hidden');
    noResults.classList.add('hidden');

    // Group prompts by category
    const promptsByCategory = {};
    filteredPrompts.forEach(prompt => {
        if (!promptsByCategory[prompt.categoryId]) {
            promptsByCategory[prompt.categoryId] = [];
        }
        promptsByCategory[prompt.categoryId].push(prompt);
    });

    // Render each category section
    promptsSection.innerHTML = categories
        .filter(category => promptsByCategory[category.id])
        .map(category => {
            const categoryPrompts = promptsByCategory[category.id];
            return `
                <section class="category-section" id="category-${category.id}">
                    <div class="category-header">
                        <h2 class="category-title">
                            <span>${category.icon}</span>
                            ${category.name}
                        </h2>
                        <span class="category-count">(${categoryPrompts.length} prompts)</span>
                    </div>
                    <p style="color: var(--text-secondary); margin-bottom: var(--spacing-lg);">
                        ${category.description}
                    </p>
                    <div class="prompts-grid">
                        ${categoryPrompts.map(prompt => createPromptCard(prompt)).join('')}
                    </div>
                </section>
            `;
        }).join('');
}

// Create prompt card HTML
function createPromptCard(prompt) {
    return `
        <div class="prompt-card" onclick='openPromptModal(${JSON.stringify(prompt).replace(/'/g, "&#39;")})'>
            <div class="prompt-header">
                <h3 class="prompt-title">${prompt.title}</h3>
                <p class="prompt-description">${prompt.description}</p>
            </div>
            <div class="prompt-tags">
                ${prompt.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="prompt-meta">
                <span class="difficulty-badge difficulty-${prompt.difficulty}">
                    ${prompt.difficulty}
                </span>
                <button class="btn-view">View Prompt →</button>
            </div>
        </div>
    `;
}

// Open prompt modal
function openPromptModal(prompt) {
    document.getElementById('modalTitle').textContent = prompt.title;
    document.getElementById('modalDescription').textContent = prompt.description;
    document.getElementById('modalTags').innerHTML = prompt.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');
    document.getElementById('modalDifficulty').innerHTML = `
        <span class="difficulty-badge difficulty-${prompt.difficulty}">
            ${prompt.difficulty}
        </span>
    `;
    document.getElementById('modalPromptText').textContent = prompt.prompt;

    // Store current prompt for copying
    window.currentPrompt = prompt.prompt;

    promptModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    promptModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Copy prompt text
function copyPromptText() {
    if (window.currentPrompt) {
        navigator.clipboard.writeText(window.currentPrompt).then(() => {
            showToast();
        }).catch(err => {
            console.error('Failed to copy:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.currentPrompt;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showToast();
            } catch (err) {
                console.error('Fallback copy failed:', err);
            }
            document.body.removeChild(textArea);
        });
    }
}

// Show toast notification
function showToast() {
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !promptModal.classList.contains('hidden')) {
        closeModal();
    }
});

// Prevent modal content clicks from closing modal
document.querySelector('.modal-content')?.addEventListener('click', (e) => {
    e.stopPropagation();
});
