/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import languages from '../data/languages.json';

const LangModal = () => {
    const {others: moreLangs} = languages;
 
  return (
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box h-1/2">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg mb-4">Languages</h3>
    <div className="grid grid-cols-2 overflow-x gap-2">
    {moreLangs.map((e) => (
    <Link to='/' className={'btn'}key={e}>{e}</Link>
))}

    </div>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
  )
}

export default LangModal;