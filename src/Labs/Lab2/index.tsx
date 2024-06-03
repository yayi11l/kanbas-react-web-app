import AbsolutePosition from "./AbsolutePosition";
import Addons from "./Addons";
import BackgroundColor from "./BackgroundColor";
import Border from "./Border";
import Cards from "./Cards";
import ClassSelector from "./ClassSelector";
import Corner from "./Corner";
import Dimension from "./Dimension";
import DocStructStyle from "./DocStructStyle";
import Dropdowns from "./Dropdowns";
import FixedPosition from "./FixedPosition";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColor from "./ForegroundColor";
import Form from "./Form";
import Grid from "./Grid";
import GridSystem from "./GridSystem";
import Hyperlinks from "./Hyperlinks";
import IdSelector from "./IdSelector";
import Lists from "./Lists";
import Margin from "./Margin";
import Padding from "./Padding";
import Range from "./Range";
import ReactIconsSampler from "./ReactIconsSampler";
import RelativePosition from "./RelativePosition";
import ResponsiveDramatic from "./ResponsiveDramatic";
import ResponsiveForms from "./ResponsiveForms";
import ResponsiveGrids from "./ResponsiveGrids";
import ResponsiveTables from "./ResponsiveTables";
import ScreenSizeLabel from "./ScreenSizeLabel";
import Switches from "./Switches";
import Tables from "./Tables";
import Tabs from "./Tabs";
import ZIndex from "./ZIndex";
import "./index.css"

export default function Lab2() {
  return (
    <div id="wd-lab2" className="container">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>

      <IdSelector />
      <ClassSelector />
      <DocStructStyle />
      <ForegroundColor />
      <BackgroundColor />
      <Border />
      <Padding />
      <Margin />
      <Corner />
      <Dimension />
      <RelativePosition />
      <AbsolutePosition />
      <FixedPosition />
      <ZIndex />
      <Float />
      <Grid />
      <Flex />
      <ReactIconsSampler />
      <GridSystem />
      <ResponsiveGrids />
      <ResponsiveDramatic />
      <ScreenSizeLabel />
      <Tables />
      <ResponsiveTables />
      <Lists />
      <Hyperlinks />
      <Form />
      <Dropdowns />
      <Switches />
      <Range />
      <Addons />
      <ResponsiveForms />
      <Tabs />
      <Cards />
    </div>
  );
}
