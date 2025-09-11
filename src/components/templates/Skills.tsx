const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "PHP", "Laravel", "Python", "PySpark", "Pandas",
    "SQL", "MySQL", "PostgreSQL", "Git", "Docker", "Tailwind CSS"
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Habilidades Técnicas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }