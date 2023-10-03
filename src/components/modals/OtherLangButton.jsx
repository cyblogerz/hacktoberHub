import LangModal from "./LangModal"

const OtherLangButton = () => {
    
  return (
    <>
<button className="btn my-20 btn-neutral normal-case text-xl sm:text-sm sm:max-w-md sm:my-2" onClick={()=>document.getElementById('my_modal_3').showModal()}>Other Languages</button>
<LangModal />
</>

  )
}

export default OtherLangButton