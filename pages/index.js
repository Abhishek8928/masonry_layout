import Image from "next/image";
import style from "../styles/home.module.css";
import IMAGE_URL_LIST from "../constant/constant";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className={`w-full p-[2vw]  ${style["parent-container"]}  `}>
        {IMAGE_URL_LIST.map((item) => (
          <div className={`${style["container-wrapper"]}`}>
            <Image className={`${style.img}`}  src={item} width={200} height={200} />

            <div className={`${style["overlay-wrapper"]}`}>

              <div className={`${style["bottom"]}`}>
              <div className={`${style["svg-wrapper"]}`}>

              <svg aria-hidden="true"  aria-label="" class="Uvi gUZ U9O kVc" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M7.44 5.44a1.5 1.5 0 1 0 2.12 2.12l.94-.94v6.88a1.5 1.5 0 0 0 3 0V6.62l.94.94a1.5 1.5 0 0 0 2.12-2.12l-3.5-3.5a1.5 1.5 0 0 0-2.12 0zM5 13.5a1.5 1.5 0 0 0-3 0v5A3.5 3.5 0 0 0 5.5 22h13a3.5 3.5 0 0 0 3.5-3.5v-5a1.5 1.5 0 0 0-3 0v5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5z"></path></svg>
              </div>
              
              <div className={`${style["svg-wrapper"]}`}>
              <svg aria-hidden="true"  aria-label="" class="Uvi gUZ U9O kVc" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"></path></svg>
              </div>
              
              </div>

              <div className={`${style["top"]}`}>
                <button>save</button>

              </div>



            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
