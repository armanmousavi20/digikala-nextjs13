import SpecialCategory from './components/specialcategory/specialcategory';
import Slider from './components/slider/slider';
import Services from './components/services/services';
import Slider2 from './components/slider2/slider2';

export default function Home() {
  return (
          <div className='mt-2'>
              <SpecialCategory />
              <Slider />
              <Services />
              <Slider2 />
          </div>
  );
}
