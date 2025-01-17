export default async function getAllPosts() {
    const result = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
      
        //   "https://www.geckoterminal.com/solana/pools/FwBL74vuQVuyPxJF1Q7b5o1hb1NsE4TMz6DGxHZCJhUU?embed=1&info=1&swaps=1&grayscale=0&light_chart=0"
         

    
    );

    if (!result.ok) {
        throw new Error("There was an error fetching posts");
    }

    return result.json();
}