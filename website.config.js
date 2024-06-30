export const personalInfo = {
  name: 'Rem RunGu Lin',
  profilePicture: '/profile.jpg', //optional
  role: 'PhD Candidate',
  university: 'HKUST(GZ), MIT',
  universityWebsite: 'https://cma.hkust-gz.edu.cn/',
  socialMedia: [
    { name: 'Email', url: 'linrungu1224@gmail.com' },
    { name: 'Twitter', url: 'tbd' },
    {
      name: 'GitHub',
      url: 'tbd',
    },
    { name: 'LinkedIn', url: 'tbd' },
    { name: 'ORCID', url: 'https://orcid.org/my-orcid?orcid=0000-0003-1931-7609' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=4EjnMJMAAAAJ&hl=en&oi=ao' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'Digital Artist & Researcher',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  { name: 'Projects', route: '/projects' },
  { name: 'Publications', route: '/publications' },
  //{ name: "Exhibitions", route: "/exhibitions" },
  //{ name: 'Performances', route: '/performances' },
  { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  // SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
