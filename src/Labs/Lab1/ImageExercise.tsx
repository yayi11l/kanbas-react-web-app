export default function ImageExercise() {
  return (
    <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img id="wd-starship"
          width="400px"
          alt=""
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" alt="" src="logo512.png" height="200px" />
      </div>
  )
}