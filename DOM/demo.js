{/* <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <p>4</p>
</ul> */}


// （1）将最后一个 li 的文字颜色设置为 red，至少使用3种方法

// （2）将 p 去除，至少使用3种方法

// （3）实现三栏布局，至少使用3种方法（补充问题：flex = 1 是哪些内容的缩写）

// （4）点击每一个 li ，输出对应的数字，使用

(function () {
  // 1）将最后一个 li 的文字颜色设置为 red，至少使用3种方法
  // document.getElementsByTagName('li')[2].style.color = 'red'
  // document.querySelectorAll('li')[2].style.color = 'red'
  // document.querySelectorAll('ul')[0].children[2].style.color = 'red'


  // （2）将 p 去除，至少使用3种方法
  // document.getElementsByTagName('p')[0].remove()
  // document.getElementsByTagName('p')[0].parentNode.removeChild(document.getElementsByTagName('p')[0])
  // document.getElementsByTagName('p')[0].parentNode.removeChild(document.querySelectorAll('ul')[0].children[3])

  // 3）实现三栏布局，至少使用3种方法（补充问题：flex = 1 是哪些内容的缩写）
  console.log(document.getElementsByTagName('li'))
  Array.from(document.getElementsByTagName('li')).forEach((item, index) => {
    item.addEventListener('click', () => alert(index))
  })
})()
