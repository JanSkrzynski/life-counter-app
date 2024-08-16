import "./App.module.css";
import {
  Tag,
  TagPrimary,
  TagSecondary,
  TagTertiary,
} from "./view/components/Tag/Tag";

function App() {
  return (
    <>
      <h1>Hello World</h1>

      <Tag tagText="Hello" iconName="winebar" />
      <TagPrimary tagText="Hello" iconName="winebar" />
      <TagSecondary tagText="Hello" iconName="winebar" />
      <TagTertiary tagText="Hello" iconName="winebar" />
    </>
  );
}

export default App;
