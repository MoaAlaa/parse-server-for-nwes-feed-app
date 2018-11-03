Parse.Cloud.beforeSave("NewsFeed", (request) => {
    request.object.set("timestamp", new Date().getTime() / 1000); // get time in seconds
});