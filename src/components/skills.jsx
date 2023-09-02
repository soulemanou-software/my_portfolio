import SkillsContainer from "./SkillContainer";

const Skills = () => {
  // Define your skills here...
  const developerSkills = [
  {
    title: 'Web Languages',
    skills: [
      { name: 'HTML5', href: 'https://html.com' },
      { name: 'CSS3', href: 'https://css3.com' },
      // Add more skills as needed...
    ]
  },
  {
    title: 'Database Management',
    skills: [
      { name: 'SQL', href: 'https://dev.mysql.com/doc/' },
      { name: 'MySQL', href: 'https://www.mysql.com' },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org' },
      // Add more skills as needed...
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Ruby', href: 'https://www.ruby-lang.org/en/documentation/' },
      { name: 'JAVASCRIPT', href: 'https://developer.mozilla.org/en-US/docs/Web/javascript' },
      // Add more skills as needed...
    ]
  },
  {
    title: 'Libraries & Framework',
    skills: [
      { name: 'React', href: 'https://reactjs.org/docs/getting-started.html' },
      { name: 'Angular', href: 'https://angular.io/docs' },
      { name: 'TailwindCSS', href: 'https://tailwindcss.com/docs' },
      { name: 'Boostrap', href: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/' },
      { name: 'Ruby on Rails', href: 'https://guides.rubyonrails.org/' },
      { name: 'Expressjs', href: 'http://expressjs.com/' },
      // Add more skills as needed...
    ]
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Windows', href: 'https://learn.microsoft.com/en-us/windows/' },
      { name: 'Linux', href: 'https://www.kernel.org/doc/html/latest/' },
      // Add more skills as needed...
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', href: 'https://git-scm.com/doc' },
      { name: 'SVN', href: 'https://subversion.apache.org/docs/' },
      // Add more skills as needed...
    ]
  },
  {
    title: 'Software Development Methodologies',
    skills: [
      { name: 'Agile', href: 'https://document360.com/blog/agile-documentation/' },
      { name: 'Waterfall', href: 'https://www.lucidchart.com/blog/waterfall-project-management-methodology' },
      // Add more skills as needed...
    ]
  },
  {
    title: 'Developer tools',
    skills: [
      { name: 'GitHub', href: 'https://docs.github.com/en' },
      { name: 'Slack', href: 'https://slack.com/help' },
      // Add more skills as needed...
    ]
  },
  // Add more skill groups as needed...
];

  const designerSkills = [
    {
    title: 'Design Skills',
    skills: [
      { name: 'Print', href: '/' },
      { name: 'Color Theory', href: '/' },
      { name: 'Typography', href: '/' },
      { name: 'Composition', href: '/' },
      { name: 'U.C design', href: '/' },
      { name: 'Digital Platforms', href: '/' },
      { name: 'Advertising', href: '/' },
      { name: 'Wireframing', href: '/' },
      { name: 'Prototyping', href: '/' },
      { name: 'Visual Communication', href: '/' },
      { name: 'Information Architecture', href: '/' }
      // Add more skills as needed...
    ]
  },
    {
    title: 'Software Proficiency',
    skills: [
      { name: 'Adobe Photoshop', href: '/' },
      { name: 'Illustrator', href: '/' },
      { name: 'InDesign', href: '/' },
      { name: 'Adobe XD', href: '/' },
      { name: 'Figma', href: '/' },
      { name: 'Sketch', href: '/' }
      // Add more skills as needed...
    ]
  },
    {
    title: 'User Research',
    skills: [
      { name: 'Visual Aesthetics', href: '/' },
      { name: 'Brand identity', href: '/' }

      // Add more skills as needed...
    ]
  },
    {
    title: 'Interaction Design',
    skills: [
      { name: 'Static Visual Designs', href: '/' },
      { name: 'Illustrations', href: '/' },
      { name: 'Animations', href: '/' },
      { name: 'Micro-interactions', href: '/' },
      { name: 'Collaboration', href: '/' },
      { name: 'Clients', href: '/' },
      { name: 'Marketing Teams', href: '/' },
      { name: 'Printers for Design Projects', href: '/' },
      { name: 'Developers', href: '/' },
      { name: 'Product Managers', href: '/' },
      { name: 'Stakeholders', href: '/' }

      // Add more skills as needed...
    ]
  },
    {
    title: 'Testing and Iteration',
    skills: [
      { name: 'User Testing', href: '/' },
      { name: 'Iteration Process', href: '/' },
      { name: 'Feedback Collection', href: '/' },
      { name: 'Iterative Design improvements', href: '/' }
      // Add more skills as needed...
    ]
  },
    // ...
  ];

  return (
    <>
      <section id="Skills" className="relative grid h-full p-5 text-white bg-black md:h-full place-items-center">
        <div className="text-center ">
          <h2 className="bg-[url('https://github.com/soulemanou-software/my_portfolio/blob/master/src/assets/A02.jpg?raw=true')]  md:bg-[left_bottom] bg-[left_bottom] bg-no-repeat md:bg-[length:260px] bg-[length:300px] text-5xl font-bold bg-clip-text text-transparent drop-shadow-[1.5px_-1.5px_1px_white] h-20  ">
            # My Skills
          </h2>
        </div>
        <div className="grid flex-wrap items-start justify-start w-full grid-cols-1 py-5 md:grid-cols-2">
          <SkillsContainer title="Full Stack Software Developer" skillsGroups={developerSkills} className="md:border-r-2 md:border-white " />
          <SkillsContainer title="Graphic Designer" skillsGroups={designerSkills} className=""/>
        </div>
      </section>
    </>
  );
};

export default Skills;