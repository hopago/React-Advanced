import { useState, useRef, useCallback } from "react"
import usePosts from './hooks/usePosts';
import Post from "./components/Post";

const Ex1 = () => {

    const [pageNum, setPageNum] = useState(1);
    
    const {
        isLoading,
        isError,
        error,
        results,
        hasNextPage
    } = usePosts(pageNum);

    const intObserver = useRef();
    const lastPostRef = useCallback(post => {
        if (isLoading) return;

        if (intObserver.current) intObserver.current.disconnect();

        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                setPageNum(prev => prev + 1)
            }
        });

        if (post) intObserver.current.observe(post);
    }, [isLoading, hasNextPage]);

    if (isError) return <p className="center">Error: {error.message}</p>

    const content = results.map((post, index) => {
        if (results.length === index + 1) {
            return <Post ref={lastPostRef} key={post.id} post={post} />
        }
        return <Post key={post.id} post={post} />
    })

  return (
    <>
      <h1 id="top">&infin; Infinite Query &amp; Scroll<br/>&infin;
      Ex. 1 - React Only</h1>
      {content}
      {isLoading && <p className="center">Loading More Posts...</p>}
      <p className="center"><a href="#top">Back to Top</a></p>
    </>
  )
}

export default Ex1
