import { Page, PageContent, Heading, Paragraph } from 'grommet'
import { useApi } from '../hooks/useApi';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { BarLoader } from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css';

const AppBodyPostSingle = (props) => {
    let { postSlug } = useParams();
    const { data, error, loading } = useApi(props.apiEndpoints.apiBase+'/posts?slug='+postSlug);
    
    if (loading) {
        return (<BarLoader text={"Cargando...."} />);
    }

    if (error !== "") {
        return <p>{error}</p>;
    }

    if (data.length===1) {
        const post=data[0];
        return (
            <Page kind="wide">
                <PageContent background="light-3">
                    <Heading><span dangerouslySetInnerHTML={{__html: post.title.rendered}} /></Heading>
                    <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                    <Paragraph><Link to="/" >Volver</Link></Paragraph>
                </PageContent>
            </Page>
            
        );
    } else {
        return (<p>No hay datos</p>);
    }
};

export default AppBodyPostSingle;