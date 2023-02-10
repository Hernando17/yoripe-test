import Layout from '../Layout'
import { useGetAllPostQuery } from '../../redux/services/post.api'
import { AiOutlineRight } from "react-icons/ai";
import { Story, Post, LoadingInstagram } from '../../components';
import { userPost } from '../../dummy';

export default function Home() {
    const { data, error, isLoading } = useGetAllPostQuery()

    if (isLoading) return <LoadingInstagram />
    return (
        <Layout>
            <div className="home">
                <div className="home-container">
                    <Story data={data.record.data} userPost={userPost} />
                    <Post data={data.record.data} userPost={userPost} />
                </div>
                <div className="suggestion">
                    <h2>test</h2>
                </div>
            </div>
        </Layout>
    )
}