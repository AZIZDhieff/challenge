const Project = (props) => {
  return (
    <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        {/*Project card*/}
        {props.projects.map((el) => (
          <div class="project-card">
            <img src={el.image} alt="project" />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <p>
              <a href={el.githubLink}>Github Link</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
