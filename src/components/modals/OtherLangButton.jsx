import LangModal from "./LangModal"

const OtherLangButton = () => {
    
  return (
    <>
<button className="btn  btn-neutral normal-case text-xl " onClick={()=>document.getElementById('my_modal_3').showModal()}>Other Languages</button>
<LangModal />
</>

  )
}

export default OtherLangButton