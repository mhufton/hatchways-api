/**
 * API HELPER FUNCTIONS
 */

const fetch = require('node-fetch')
const array = ['tech', 'health']
const url = "https://api.hatchways.io/assessment/blog/posts"

/**
 * 
 * @param {*} array the array of tags to be plugged into the api call
 * @param {*} url the api url we're calling
 * @returns a set of calls, which should eliminate any duplicates
 */

async function concurrentCaller(array, url) {
  let urlArray = [];
  array.forEach(item => urlArray.push(`${url}?tag=${item}`))
  let posts = await Promise.all(
    urlArray.map(url => 
      fetch(url)
        .then(res => res.json())
        .then(res => res)
    )
  );
}

function getUniquePosts(postsData){
 // flatten the posts
 const posts = postData.map(p => p.post).flat()
 console.log('before unique', posts.length)
 // filter unique instances
 posts = posts.reduce((uniquePosts, post) => {
   if(!uniquePosts.find(p => p.id === post.id)) {
     uniquePosts.push(post)
   }
   return uniquePosts
 }, [])
 console.log(' after unique', posts.length)
 return posts
}

function sortPosts(posts, {sortKey, direction}) {
  return posts.sort((a,b) => direction === 'asc' ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]) 
}


concurrentCaller(array, url);
// fetcher(url, 'tech');

module.exports = concurrentCaller;