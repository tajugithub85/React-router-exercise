import React from "react";
import Colorwheel from './assets/colorwheel.png'

export class ColourWheel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };

    this.options = {
      width: this.props.width || 200,
      height: this.props.width || 200,
    };
  }

  componentDidMount() {
    this.addImageInCanvas();
  }

  render() {
    return (
      <canvas
        onMouseDown={() => this.setState({ dragging: true })}
        onMouseMove={e => this.selectColor(e)}
        onMouseUp={() => this.setState({ dragging: false })}
        style={{ cursor: "crosshair", borderRadius: "100%" }}
        ref="canvas"
        width={this.options.width}
        height={this.options.height}
      />
    );
  }

  addImageInCanvas() {
    let { canvas } = this.refs;
    this.ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = Colorwheel
    img.onload = () =>
      this.ctx.drawImage(img, 0, 0, this.options.width, this.options.height);
  }

  selectColor(e) {
    if (!this.state.dragging) return;
    let { offsetX, offsetY } = e.nativeEvent;
    let { data } = this.ctx.getImageData(offsetX, offsetY, 1, 1);
    let color = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    return this.props.callback(color);
  }
}