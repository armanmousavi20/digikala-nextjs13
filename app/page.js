import SpecialCategory from './components/specialcategory/specialcategory';
import Slider from './components/slider/slider';
import Services from './components/services/services';

export default function Home() {
  return (
          <div className='mt-2'>
              <SpecialCategory />
              <Slider />
              <Services />
          </div>
  );
}
