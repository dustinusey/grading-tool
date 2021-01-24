const links = [
    {
        name: 'HTML Validator',
        url: 'https://validator.w3.org/#validate_by_input',
    },
    {
        name: 'CSS Validator', 
        url: 'https://jigsaw.w3.org/css-validator/#validate_by_input',
    },
    {
        name: 'JSHint', 
        url: 'https://jshint.com/',
    },
    {
        name: 'How to review a peer\'s work',
        url: 'https://teamtreehouse.com/library/how-to-review-a-techdegree-project',
    },
    {
        name: 'Peer review by example',
        url: 'https://teamtreehouse.com/library/front-end-techdegree-peer-review-by-example-2' 
    }
];

const studyGuides = [
    {
        project: 'Project 1 - My Personal Profile Page',
        url: '',
    },
    {
        project: 'Project 2 - Mobile-first Responsive Layout',
        url: '',
    },
    {
        project: 'Project 3 - Online Registration Form',
        url: '',
    },
    {
        project: 'Project 4 - Web Style Guide',
        url: '',
    },
    {
        project: 'Project 5 - Interactive Photo Gallery',
        url: '',
    },
    {
        project: 'Project 6 - Game Show App',
        url: '',
    },
    {
        project: 'Project 7 - WebApp Dashboard',
        url: '',
    },
    {
        project: 'Project 8 - Use an API to Create an Employee Directory',
        url: '',
    },
    {
        project: 'Project 9 - Capstone Portfolio',
        url: '',
    },
]


const quickLinksList = document.querySelector('.quick-links-list');

links.forEach((link => {
    quickLinksList.innerHTML +=
    `
    <li>
        <p class="link-name">${link.name}</p>
        <a target="_blank" href="${link.url}">
            <div>
                <i class="fas fa-link"></i>
                <p class="link-field">${link.url}</p>
            </div>
        </a>
    </li>
    `
}));

const studyGuideList = document.querySelector('.study-guide-list');

studyGuides.forEach((guide => {
    studyGuideList.innerHTML +=
    `
    <li>
        <p class="link-name">${guide.project}</p>
        <a target="_blank" href="${guide.url}">
            <div>
            <i class="fas fa-paperclip"></i>
                <p class="link-field">${guide.url}</p>
            </div>
        </a>
    </li>
    `
}))