import { posts } from '../data/posts.js'

// Queries and Mutations acting on posts data
export const resolvers = {
    Query: {
        postById:(root,args,context,info) => {
            return posts.filter
            (posts => posts.id 
                === args.id);
         },
        postListByTopic:(root,args,context,info) => {
            return posts.filter
            (posts => posts.topic 
                === args.topic);
        },
},
    Mutation: {
        newPost: async ( _, {id, user, topic, body, comments} ) => {
            const post = {
                id:id,
                user:user,
                topic:topic,
                body:body,
                comments:comments }
            posts.push(post)
            return post
        },

      
}}
