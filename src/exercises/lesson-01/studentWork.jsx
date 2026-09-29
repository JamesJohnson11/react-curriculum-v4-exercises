//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const userName = 'Barry Johnson';
  const userAge = 38;
  const userHobbies = [
    { id: 1, name: 'Coding' },
    { id: 2, name: 'Reading' },
    { id: 3, name: 'Watching sports' },
    { id: 4, name: 'Working out' },
  ];

  return (
    <div>
      <h1> About Me </h1>
      <p>
        Hello, my name is {userName} and I am {userAge} years old. I&#39;m
        originally from New York, but I currently reside in Kissimmee, Florida.
        <br />
        <br />
        I am a passionate Software Engineer with a little over 3 years of
        experience building scalable backend systems using the Java
        <br />
        programming language. During that period, I became proficient in
        building RESTful APIs, working with relational databases,
        <br />
        and implementing best practices for software development. I also became
        familiar with various tools and technologies such as
        <br />
        Apache Kafka, Apache Beam, Apache Cassandra, Parseq, Rest.li, and gRPC.
        <br />
        <br />
        Prior to becoming a Software Engineer, I worked in reporting and data
        analytics for 4 years, which strengthened my problem solving
        <br />
        and attention to detail. I gained expertise with tools like Tableau,
        Power Query, Excel, and SQL, allowing me to analyze complex
        <br />
        datasets and create executive-level dashboards which guided
        decision-making for leadership.
        <br />
        <br />
        Some of my hobbies include:
      </p>
      <ul>
        {userHobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.name}</li>
        ))}
      </ul>
      <p>
        I am looking forward to learning more about React and frontend
        development in general, thereby transforming myself
        <br />
        from a backend engineer to a full-stack developer with the ability to
        build dynamic and interactive web applications.
      </p>
    </div>
  );
}
