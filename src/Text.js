export default class TextModel {
  constructor(ctx, text, position = { x: 0, y: 0 }, font) {
    this.ctx = ctx;
    this.text = text;
    this.position = position;
    this.font = font;
  }

  draw() {
    this.ctx.font = this.font;
    this.ctx.fillText(this.text, this.position.x, this.position.y);
  }
}
