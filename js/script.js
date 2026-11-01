// async function getPost () {
//   try {
//     const response = await fetch('https://tarmeezacademy.com/api/v1/posts?limit=50');


//     if(!response.ok) {
  //       console.log(`the posts get error`)
  //     }
  
  //     const data = await response.json();
  //     console.log(data);
//   }
//   catch(error) {
  //     consol.log(`The post error 404 ${error}`);
  //   }
  // };
  
  // getPost()
  
let container = document.querySelector('.container');


axios.get('https://tarmeezacademy.com/api/v1/posts?limit=50')
.then((response) => {
  const posts = response.data.data;

  for(let post of posts) {
    console.log(post)

    let content = ` 
      <div class="content" id="content">

        <div class="header">
          <img src="" alt="">
          <h3></h3>
        </div>

        <div class="body">
          <img src="" alt="">
          <h4></h4>
          <p></p>
        </div>

        <div class="footer">
          <i class="fa-solid fa-comment-dots commitIcon"></i>
          <div>
            <span></span>
            <p></p>
          </div>
        </div>

      </div>
    `
    container.innerHTML = content;
  }
})

