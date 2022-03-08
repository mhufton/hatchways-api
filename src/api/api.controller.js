const fetch = require('node-fetch')
const API_URL = "https://api.hatchways.io/assessment/blog/posts";
const {concurrentCaller, getUniquePosts} = require('../utils')

function ping(req, res, next) {
  if (res) {
    res.status(201).json({ "success": true})
  }
}


async function getPostsByTags(req, res, next) {
  const { tag, sortBy, direction } = req.query;
  if (!tag) {
    return res.status(400).json({ "error": "Tags parameter is required." })
  }
  // console.log('req.query:', req.query)
  let tagsArray = tag.split(',')
  console.log(tagsArray)

  const postsData = concurrentCaller(tagsArray, API_URL);
  let posts = getUniquePosts(postsData)

  if(sortyBy & direction) {
    posts = sortPosts(posts, {sortKey, direction})
  }


    
 
}

function sortBy(req, res, next) {

}

function ascOrDesc(req, res, next) {

}

module.exports = {
  ping,
  getPostsByTags
}
