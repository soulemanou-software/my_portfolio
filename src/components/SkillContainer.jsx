import SkillList from "./SkillList";


const SkillsContainer = ({ title, skillsGroups, className }) => (
  <div className={className}>
  <div className="grid pr-1 gap-10">
    <h2 className="md:text-3xl text-2xl font-bold text-center">{title}</h2>
    <div className="flex flex-wrap md:gap-4 p-4 flex-col md:flex-row justify-start items-start">{
      skillsGroups.map((group, index) => (
        <SkillList key={index} title={group.title}  skills={group.skills} />
      ))
    }</div>
  </div>
  </div>
);
export default SkillsContainer;
