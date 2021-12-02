import './App.css';
import Accordion from './components/Accordion';
import { AccordionData } from './utils/AccordionData';

function App() {
  return (
    <div className="App">
      <Accordion title={AccordionData[0].title} content={AccordionData[0].content}/>
      <Accordion title={AccordionData[1].title} content={AccordionData[1].content}/>
      <Accordion title={AccordionData[2].title} content={AccordionData[2].content}/>
    </div>
  );
}

export default App;
