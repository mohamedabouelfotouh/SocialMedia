
let container = document.querySelector('.container');


axios.get('https://tarmeezacademy.com/api/v1/posts?limit=30')
  .then((response) => {
    const posts = response.data.data;
    let htmlContent = "";
    for (let post of posts) {
      let authorImage = post.author && post.author.profile_image ? post.author.profile_image : "";

      htmlContent += ` 
      <div class="content" id="content">

        <div class="header">
          <img src="../image/images.jfif" alt="#">
          <h3>${post.author?.name || "مجهول"}</h3>
        </div>

        <div class="body">
          <img src="../image/Gemini_Generated_Image_fvu2gtfvu2gtfvu2.jfif" alt="">
          <span>${post.created_at}</span>

          <h4>${post?.title || 'بسم الله الرحمن الرحيم'}</h4>
          <p>
            ${post.body}
          </p>
        </div>

        <div class="footer">
          <i class="fa-solid fa-comment-dots commitIcon"></i>
          <div class="tag">${post?.tags && post.tags.length !== 0 ? post.tags : 'UN kwon'}</div>
          <div class='count'>
            <span>${post?.comments_count || 0}</span>
          </div>
        </div>

      </div>
    `
    }
    container.innerHTML = htmlContent;
  })



let buttonLogIn = document.getElementById('login');
let theBodyDiv = document.querySelector('body');

buttonLogIn.addEventListener('click', function () {
  let contLogIn = `
      <div class="logn">
        <div class="cont">
          <i class="fa-solid fa-xmark close"></i>
          <h3 class="title">أدخل بياناتك للحصول على كامل الصلاحيات</h3> 
          <form action="" method="post">
            <input type="email" name="email" id="email" placeholder="Enter Yor Email">
            <input type="password" name="password" id="pass" placeholder="Enter Your Password">
            <button>تسجيل دخول</button>
          </form>
        </div>

      </div>
  `;

  theBodyDiv.classList.add('overflow')
  theBodyDiv.insertAdjacentHTML('beforeend', contLogIn)

  let buttonClose = document.querySelector('.logn .close');
  let removeOverlay = document.querySelector('.logn');


  buttonClose.addEventListener('click', function () {
    removeOverlay.remove()
    theBodyDiv.classList.remove('overflow')
  })
})

