import Button from '../UI/Button';
import languages from '../data/languages.json';

const MarqueeButtons = () => {
    const { main: mainLanguages } = languages;

    return (
        <div className="items-center justify-center flex gap-8 flex-wrap py-20 w-[65%]">
            {mainLanguages.map((lang) => {
                return <Button lang={lang} key={lang} />;
            })}
        </div>
    );
};

export default MarqueeButtons;
