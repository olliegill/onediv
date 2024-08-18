
import './App.css';
import './divs.css';
import { DivSection } from './DivSection/DivSection';
import circle from './assets/circle.png';
import triangle from './assets/triangle.png';
import ellipsis from './assets/ellipsis.png';
import diamond from './assets/diamond.png';
import eightPoint from './assets/eightPoint.png';
import threeCircles from './assets/threeCircles.png';
import trapezoid from './assets/trapezoid.png';
import octagon from './assets/octagon.png';
import starButton from './assets/starButton.png';
import emptyButton from './assets/emptyButton.png';
import turkeyFlag from './assets/turkeyFlag.png';

function App() {
  return (
    <div className='outer'>
      <h1>ONE DIV CHALLENGE</h1>

      <h2>EASY</h2>
      <DivSection image={circle}>
        <div className='easy__circle' />
      </DivSection>
      <DivSection image={triangle}>
        <div className='easy__triangle' />
      </DivSection>
      <DivSection image={ellipsis}>
        <div className='easy__ellipsis' />
      </DivSection>
      <DivSection image={diamond}>
        <div className='medium__diamond' />
      </DivSection>
      
      <h2>MEDIUM</h2>
      <DivSection image={eightPoint}>
        <div className='medium__eightPoint' />
      </DivSection>
      <DivSection image={threeCircles}>
        <div className='medium__threeCircles' />
      </DivSection>
      <DivSection image={trapezoid}>
        <div className='medium__trapezoid' />
      </DivSection>
      <DivSection image={octagon}>
        <div className='medium__octagon' />
      </DivSection>

      <h2>HARD</h2>
      <DivSection image={starButton}>
        <button className='hard__starButton'>button</button>
      </DivSection>
      <DivSection image={emptyButton}>
        <button className='hard__emptyButton'/>
      </DivSection>
      <DivSection image={turkeyFlag}>
        <div className='hard__turkeyFlag'>★</div>
      </DivSection>
    </div>
  )
}

export default App
