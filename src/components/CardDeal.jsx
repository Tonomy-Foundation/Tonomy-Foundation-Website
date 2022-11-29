import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';
const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Our goal is to provide <br className="sm:block hidden" /> the infrastructure for a better world</h2>
        <p className={`${styles.paragraph} max-[470px] mt-5`}>We know how to create new revolutionary systems that create the bedrock for the world of tomorrow, but we need you to make it work. Join our program today by investing or join up with your company to start improving. It’s all about leaving the world as a better place than when we found it.</p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src="https://res.cloudinary.com/droaf0tqk/image/upload/v1667828737/card_k9zhcb.png" alt="card" className="w-[100%] h-[100%] hover:scale-110 transition duration-300 ease-in-out"/>

      </div>


    </section>
  )


export default CardDeal