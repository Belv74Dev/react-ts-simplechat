import style from './title.module.css'

export const Title = ({ text }: { text: string }) => {
  return <h1 className={style.title}>{text}</h1>
}
