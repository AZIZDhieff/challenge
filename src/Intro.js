const Intro = () => {
  return (
    <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img
        class="avatar"
        src={`${process.env.PUBLIC_URL}./John-Doe.jpg`}
        alt="jhon-doe"
      />
    </section>
  );
};
export default Intro;
