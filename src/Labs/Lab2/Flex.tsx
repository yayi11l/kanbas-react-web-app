export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <p>It all starts with creating a container element that 
        configures the layout and behavior of its child elements.
      </p>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow  wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue">Column 2</div>
        <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
      </div>

    </div>
  )
}