const dummy = (blogs) => {
  return(1)
}

const likes = (blogs) => {
  let tot = 0;
  for (let b of blogs) {
    tot += b.likes
  }
  return(tot)
}

const favoriteBlog = (blogs) => {
  let best = {};
  let likes = 0;
  for (let b of blogs) {
    if (b.likes > likes){
      likes = b.likes;
      best = b;
    }
  }
  return(best)
}

const mostBlogs = (blogs) => {
  let bloggers = []
  for (let b of blogs) {
    if ( bloggers.findIndex((obj => obj.name == b.author)) >= 0 ){
      objIndex = bloggers.findIndex((obj => obj.name == b.author));
      bloggers[objIndex].count = bloggers[objIndex].count+1
    } else {
      let temp = {name:b.author, count:1}
      bloggers.push(temp)
    }
  }
  let best = {};
  let likes = 0;
  for (let b of bloggers) {
    if (b.count > likes){
      likes = b.count;
      best = b;
    }
  }
  return(best)
}

const mostLikes = (blogs) => {
  let bloggers = []
  for (let b of blogs) {
    if ( bloggers.findIndex((obj => obj.name == b.author)) >= 0 ){
      objIndex = bloggers.findIndex((obj => obj.name == b.author));
      bloggers[objIndex].likes = bloggers[objIndex].likes+b.likes
    } else {
      let temp = {name:b.author, likes:b.likes}
      bloggers.push(temp)
    }
  }
  let best = {};
  let likes = 0;
  for (let b of bloggers) {
    if (b.likes > likes){
      likes = b.likes;
      best = b;
    }
  }
  return(best)
}

module.exports = {
  dummy,
  likes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
