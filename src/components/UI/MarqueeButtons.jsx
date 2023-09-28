
import Button from '../UI/Button';
import languages from '../data/languages.json';

const MarqueeButtons = () => {
 
  
    const { main: mainLanguages } = languages
    
  return (
    <div className="flex items-center justify-center">
  <div className="flex w-[75%] overflow-x-auto">
  <div className="marquee flex">
    {mainLanguages.map((lang) => {
      return <Button lang={lang} key={lang} />;
    })}
    </div>
  </div>
  
</div>
  )
}


export default MarqueeButtons