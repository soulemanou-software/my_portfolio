
const SkillList = ({ title, skills }) => (
  <div className=" w-min">
    <h3 data-aos="fade-right" className="text-md font-500 text-white underline">{title}</h3>
    <ul className="">
      {skills.map((skill) => (
        <li key={skill.name} data-aos="fade-right">
          <span className="bg-blue-700 w-min px-2 text-sm rounded-l-sm">
            {skill.name}
          </span>
          <a
            href={skill.href}
            className="bg-white w-min px-2 rounded-r-sm  text-sm"
          ></a>
        </li>
      ))}
    </ul>
  </div>
);

export default SkillList;