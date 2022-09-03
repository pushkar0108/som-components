
export default function Map() {
  return (
    <div style={{
      position: "relative",
      textAlign: "right",
      height: "350px",
      width: "100%",
    }}>
      <div style={{
        overflow: "hidden",
        background: "none !important",
        height: "350px",
        width: "100%",
      }}><iframe width="100%" height="350" id="gmap_canvas"
        src="https://maps.google.com/maps?q=Dynamic%20Layers&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
          href="https://www.emojilib.com/"></a></div>
    </div>
  )
}


