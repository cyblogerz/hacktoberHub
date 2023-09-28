
import Button from '../UI/Button';
import languages from '../data/languages.json';

const MarqueeButtons = () => {
 
  
    const { main: mainLanguages } = languages
    
  return (
    <div className="flex items-center justify-center w-[65%] ">
 
  <div className="items-center justify-center flex flex-wrap">
    {mainLanguages.map((lang) => {
      return <Button lang={lang} key={lang} />;
    })}
    </div>

  
</div>
  )
}


export default MarqueeButtons