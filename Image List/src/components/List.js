import API from '../utils/api.js';

export default class List {
  $list = null;
  state = {
    data:[],
    loading: false
  };

  constructor() {
    this.$list = document.querySelector('.img_list');
  }

  setState(newState){
    this.state = {
      ...this.state, // 현재 상태
      ...newState // 새로운 상태가 있다면 덮어쓰기
    } 

    this.render(); // 바꾸고 render
  }

  getList(query) {
    API.fetchList(query).then(data => {
      this.setState({
        data
      })
    });
  }

  render() {
    const html = this.state.data.map((item) => {
      return `
        <li class="img_item">
          <div class="img_wrap">
            <img class="img" src="${item.urls.regular}" alt="${item.alt_description}">
          </div>
        </li>
      `;
    });
    this.$list.innerHTML = html.join('');
  }
}

