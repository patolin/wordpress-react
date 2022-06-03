
import {Box, Card, CardBody, CardFooter, CardHeader, Grid} from 'grommet'
import { useState, useEffect } from "react";
import {
    Link, 
    BrowserRouter as Router
  } from "react-router-dom"

const AppBody = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch(props.apiEndpoints.apiBase + '/posts/');
            if(!response.ok) {
                // ups!, esto falla
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
            
        }
    
        loadPosts();
    }, [props.apiEndpoints.apiBase])

    return (
        <Box flex align='left'>
            <h1>{props.title}</h1>
            <Router>
            <Grid gap="medium" columns={{ count: 'fit', size: 'medium'}}>
            {posts.map((post, index) => (
                <Box pad="small" gap="medium" width="full" key={post.id}>
                    <Card pad="small" background="light-4" gap="medium" >
                        <CardHeader><h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} /></CardHeader>
                        <CardBody><div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} /></CardBody>
                        <CardFooter><Link to={post.link.replace('https://patolin.com/', '/')} >Leer más</Link></CardFooter>
                    </Card>
                </Box>
            ))}
            </Grid>
            </Router>
        </Box>
    );
}

AppBody.defaultProps = {
    title: 'Blog content',
    defaultWidth: 8,
}

export default AppBody;
