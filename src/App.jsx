import Header from "./Components/Header";
import { Section } from "./Components/Section";
import { HelpfulResource } from "./Components/HelpfulResource";
import { AboutMe } from "./Components/AboutMe";
import { Footer } from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react">
        <p>
          React is a Javascript library created by Facebook. Its philosphy is
          based on using 'Components' which are reusable code blocks for
          rendering HTML on a page. Its useful with JSX, which allows you to
          write cod that similar to HTML. It uses a virtual DOM to monitor
          changes on the actual DOM and the "Reacts" to the changes and updates
          accordingly. It is Web Development focused and also supports mobile
          app deveolpment through react Native.
        </p>
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Reusable Components</li>
          <li>The virtual DOM only updates when nessacary</li>
          <li>Strong Ecosystem</li>
          <li>State Manipulation</li>
          <li>Simplicity</li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource
          link="https://www.youtube.com/watch?v=wIyHSOugGGw"
          label="Every React Concept Explained in 12 Minutes"
        />
        <HelpfulResource
          link="https://www.youtube.com/watch?v=2NPIYnY3ilo&t=1s"
          label="Every React 19 Feature Explained in 8 Minutes"
        />
        <HelpfulResource
          link="https://atlas-jswank.github.io/blog/hello-react/"
          label="Hello React by Jeremiah Swank"
        />
        <HelpfulResource
          link="https://atlas-jswank.github.io/blog/jsx/"
          label="What is JSX by Jeremiah Swank"
        />
      </Section>
      <Section title="About Me">
        <AboutMe />
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
}

export default App;
