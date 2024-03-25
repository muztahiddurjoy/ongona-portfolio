import SkillContainer from "./SkillContainer/SkillContainer"


const Skills = () => {
  return (
    <div className="my-10 md:my-20 md:px-20 px-5">
    <p className='text-3xl font-extrabold md:text-4xl text-black'>Skills<span className='h-[5px] w-[5px] rounded-full gdText text-5xl ml-0.5'>.</span> </p>
    <div className="flex flex-wrap items-center justify-center gap-3 mt-5 md:px-20">
        <SkillContainer img="/html.png" name="html"/>
        <SkillContainer img="/css.png" name="css"/>
        <SkillContainer img="/js.jpg" name="javascript"/>
        <SkillContainer img="/ts.jpg" name="typescript"/>
        <SkillContainer img="/react.png" name="react"/>
        <SkillContainer img="/next.jpg" name="next js"/>
        <SkillContainer img="/node.png" name="node js"/>
        <SkillContainer img="/express.png" name="Express"/>
        <SkillContainer img="/nest.png" name="nest js"/>
        <SkillContainer img="/mongo.jpg" name="mongo db"/>
        <SkillContainer img="/mysql.png" name="mysql"/>
        <SkillContainer img="/firebase.png" name="firebase"/>
        <SkillContainer img="/java.png" name="java"/>
        <SkillContainer img="/socket.jpg" name="scoket io"/>
        <SkillContainer img="/gsap.png" name="gsap"/>
        <SkillContainer img="/react.png" name="React Native (Expo)"/>
        <SkillContainer img="/android.png" name="android"/>
    </div>
    </div>
  )
}

export default Skills