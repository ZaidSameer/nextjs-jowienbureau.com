function MediaItems({ data }) {
  return (
    <>
      {
        data.map((props) => {
          const { id, image, category } = props;
          const css = `w-full mb-4 duration-300 transition-all ease-linear`;
          return <img src={image} key={id} className={css} />
        })
      }

    </>
  )
}

export default MediaItems