
const SkillContainer = ({img,name}:{img:string,name:string}) => {
  return (
    <div className="rounded-md p-2 border flex flex-col items-center border-gray-300 transition-colors ease-in-out duration-200 hover:border-theme1">
        <img src={img} className="h-auto w-[70px] rounded-md"/>
        <p className="text-center text-xs uppercase text-gray-500 mt-2">{name}</p>
    </div>
  )
}

export default SkillContainer