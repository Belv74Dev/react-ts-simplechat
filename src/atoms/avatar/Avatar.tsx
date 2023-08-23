import style from './avatar.module.css'

export const Avatar = ({
  src,
  alt,
  size,
}: {
    src: string | null;
    alt: string;
    size: 'xs' | 'sm' | 'lg';
  }) => {
  return (
    <div className={
      style.avatar +
        ' ' + {
          xs: style.avatar__xs,
          sm: style.avatar__sm,
          lg: style.avatar__lg,
        }[size]
    }>
      {src ? (
        <img className={style.avatar_img} 
          src={src} 
          alt={alt} 
        />
      ) : (
          <div className={style.avatar_fallback}>
            {alt.slice(0, 2)}
          </div>
        )}
    </div>
  )
}
