import { useState } from 'react';

const certData = [
  { title: "Web Dev Cert", desc: "Learned HTML/CSS/JS", img: "path/to/img1.jpg" },
  { title: "React Mastery", desc: "Advanced Hooks and State", img: "path/to/img2.jpg" }
];

export default function Certifications() {
  const [index, setIndex] = useState(0);

  const nextCert = () => setIndex((index + 1) % certData.length);
  const prevCert = () => setIndex((index - 1 + certData.length) % certData.length);

  return (
    <section id="certs" style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Certifications</h2>
      <div style={{ border: '1px solid #ccc', padding: '20px', display: 'inline-block' }}>
        <h3>{certData[index].title}</h3>
        <p>{certData[index].desc}</p>
        <img src={certData[index].img} alt="Cert" style={{ width: '300px', height: '200px' }} />
        <div style={{ marginTop: '10px' }}>
          <button onClick={prevCert}>← Previous</button>
          <button onClick={nextCert}>Next →</button>
        </div>
      </div>
    </section>
  );
}