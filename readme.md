# How to run the Apollo Server to test the API

1. npm install
2. npm start

## Sample querys to use for testing server:

1. 

query { 
    postById(id: "20") 
    { user topic body comments 
    } 
}

2. 

query { 
    postListByTopic(topic: "Weather") 
    {id user body comments
    } 
}

3. 

mutation {
    newPost (id: "111", user: "Curtis", topic: "Jobs", body: "Who is hiring these days?", comments: "Microsoft.",) {id user topic body comments}
}

