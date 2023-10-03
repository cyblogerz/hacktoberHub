
import Button from '../UI/Button';
import languages from '../data/languages.json';

const MarqueeButtons = () => {
 
  
    const { main: mainLanguages } = languages
    
  return (
    <div className="flex items-center justify-center w-[65%]  w-1/2">
 
  <div className="items-center justify-center flex gap-8 flex-wrap mb-20">
    {mainLanguages.map((lang) => {
      return <Button lang={lang} key={lang} />;
    })}
    </div>

  
</div>
  )
}


export default MarqueeButtons