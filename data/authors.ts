export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export const authors: Record<string, Author> = {
  'lionel-tchami': {
    id: 'lionel-tchami',
    name: 'Lionel Tchami',
    role: 'Founder & DevOps Consultant',
    bio: 'With 7+ years of enterprise DevOps experience from IBM Canada and major energy companies, I help Canadian small businesses leverage modern technology for growth. I specialize in cloud optimization, automation, and making complex tech accessible for SMBs.',
    image: '/images/authors/lionel-tchami.jpg', // You can add this later
    linkedin: 'https://linkedin.com/in/lioneltchami',
    website: 'https://northstack.ca',
  },
  'northstack-team': {
    id: 'northstack-team',
    name: 'NorthStack Solutions Team',
    role: 'DevOps & Automation Experts',
    bio: 'NorthStack Solutions is a Calgary-based DevOps and automation consultancy specializing in helping Canadian small businesses leverage modern technology for growth. We bring enterprise-level expertise at small business prices.',
    linkedin: 'https://linkedin.com/company/northstack-solutions',
    website: 'https://northstack.ca',
  },
};

export const getAuthor = (authorId: string): Author => {
  return authors[authorId] || authors['northstack-team'];
};
