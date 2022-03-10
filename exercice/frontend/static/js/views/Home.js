
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }


  async getHtml() { // this is the html for the dashboard view
    return `
      <div class="wrapper-home">
      <h1> Next awaited games </h1>
      </div>
    `
  }
}