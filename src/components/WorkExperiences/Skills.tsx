
function Skills({ skills }: { skills: string[] }) {
    return (
      <ul className="flex flex-wrap">
        {skills.map((skill, index) => (
          <li key={index} className="mr-2 mb-3">
            <div className="flex items-center rounded-full 
            bg-slate-700 dark:bg-slate-700 text-slate-100 
            px-3 py-1 font-medium leading-5">{skill}</div>
          </li>
        ))}
      </ul>
    );
}

export default Skills;