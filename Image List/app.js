const api = (query) => {
  const url = 'https://api.unsplash.com/photos/';
  const accessKey = 'ssnEAeK6VhlA8nKUV3Q5FIdaKgCc5oFbDFa0-nl5G2M';
  return fetch(`${url}?client_id=${accessKey}&query=${query}`)
    .then(res => res.json())
}

class List {
  constructor() {
    this.$list = document.querySelector('.img_list');
    this.state = {};
  }

  setState(newState){
    this.state = {
      ...this.state, // 현재 상태
      ...newState // 새로운 상태가 있다면 덮어쓰기
    } 

    this.render(); // 바꾸고 render
  }

  getList(query) {
    api(query).then(data => {
        this.setState({
          data
        })
      })
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

const list = new List();
list.getList('apple');